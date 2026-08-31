// Estadística robusta para datos de UNA persona.
// Decisiones (del plan de producto, con respaldo bibliográfico):
// - Línea base = mediana móvil de 28 días; bandas con MAD (no media/desvío:
//   una noche de 3 h no debe arrastrar el "normal").
// - Comparaciones con/sin hábito: Mann-Whitney U (SOL/WASO son asimétricas,
//   nada de asumir normalidad) + estimador de Hodges-Lehmann en unidades
//   reales ("~32 min menos"), no p-values pelados.
// - Comparaciones múltiples: Benjamini-Hochberg (FDR).

export function mediana(xs: number[]): number | null {
  if (xs.length === 0) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

export function mad(xs: number[]): number | null {
  const med = mediana(xs);
  if (med == null) return null;
  return mediana(xs.map((x) => Math.abs(x - med)));
}

// z robusto: 0.6745·(x − mediana)/MAD  →  |z| > 2 ≈ fuera de banda.
export function zRobusto(x: number, xs: number[]): number | null {
  const med = mediana(xs);
  const m = mad(xs);
  if (med == null || m == null || m === 0) return null;
  return (0.6745 * (x - med)) / m;
}

export function bandas(xs: number[]): { centro: number; inf: number; sup: number } | null {
  const med = mediana(xs);
  const m = mad(xs);
  if (med == null || m == null) return null;
  const ancho = (2 / 0.6745) * (m === 0 ? 1e-9 : m);
  return { centro: med, inf: med - ancho, sup: med + ancho };
}

// Φ(z): CDF normal estándar (Abramowitz-Stegun 7.1.26, error < 1.5e-7).
function phi(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (z > 0) p = 1 - p;
  return p;
}

// Mann-Whitney U de dos colas, aproximación normal con corrección por
// empates y continuidad. Válida para los n que maneja esta app (≥5 y ≥5).
export function mannWhitney(a: number[], b: number[]): { p: number; u: number } | null {
  const n1 = a.length;
  const n2 = b.length;
  if (n1 < 2 || n2 < 2) return null;

  const todos = [...a.map((v) => ({ v, g: 0 })), ...b.map((v) => ({ v, g: 1 }))].sort(
    (x, y) => x.v - y.v
  );

  // rangos con promedio en empates
  const rangos = new Array(todos.length).fill(0);
  let i = 0;
  const empates: number[] = [];
  while (i < todos.length) {
    let j = i;
    while (j + 1 < todos.length && todos[j + 1].v === todos[i].v) j++;
    const r = (i + j + 2) / 2;
    for (let k = i; k <= j; k++) rangos[k] = r;
    if (j > i) empates.push(j - i + 1);
    i = j + 1;
  }

  let r1 = 0;
  todos.forEach((t, k) => {
    if (t.g === 0) r1 += rangos[k];
  });
  const u1 = r1 - (n1 * (n1 + 1)) / 2;
  const u = Math.min(u1, n1 * n2 - u1);

  const n = n1 + n2;
  const mu = (n1 * n2) / 2;
  const correccionEmpates = empates.reduce((acc, t) => acc + (t * t * t - t), 0);
  const sigma2 = ((n1 * n2) / 12) * (n + 1 - correccionEmpates / (n * (n - 1)));
  if (sigma2 <= 0) return null;
  const z = (Math.abs(u - mu) - 0.5) / Math.sqrt(sigma2);
  const p = Math.max(0, Math.min(1, 2 * (1 - phi(z))));
  return { p, u };
}

// Hodges-Lehmann: mediana de todas las diferencias (a_i − b_j).
// "Las noches con X dormiste ~32 min menos" sale de acá.
export function hodgesLehmann(a: number[], b: number[]): number | null {
  if (a.length === 0 || b.length === 0) return null;
  const difs: number[] = [];
  for (const x of a) for (const y of b) difs.push(x - y);
  return mediana(difs);
}

// Benjamini-Hochberg: devuelve el p ajustado (q) de cada test, en orden.
export function ajustarFDR(ps: number[]): number[] {
  const n = ps.length;
  const orden = ps
    .map((p, i) => ({ p, i }))
    .sort((x, y) => x.p - y.p);
  const q = new Array(n).fill(1);
  let minimo = 1;
  for (let k = n - 1; k >= 0; k--) {
    const val = Math.min(minimo, (orden[k].p * n) / (k + 1));
    minimo = val;
    q[orden[k].i] = val;
  }
  return q;
}
