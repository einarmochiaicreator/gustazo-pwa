import { Noche } from "./tipos";
import { bandas, zRobusto, mediana, mannWhitney, hodgesLehmann, ajustarFDR } from "./estadistica";
import { horaAMinutosNocturnos, minutosATexto, esFinde } from "./fechas";

// ─────────────────────────────────────────────────────────────────────
// Fases del plan de conocimiento
// ─────────────────────────────────────────────────────────────────────
export type Fase = 0 | 1 | 2;

export function faseActual(noches: Noche[]): { fase: Fase; nMedidas: number } {
  const nMedidas = noches.filter((n) => n.total_min != null).length;
  if (nMedidas < 7) return { fase: 0, nMedidas };
  if (nMedidas < 14) return { fase: 1, nMedidas };
  return { fase: 2, nMedidas };
}

// ─────────────────────────────────────────────────────────────────────
// Línea base personal y veredicto de la mañana
// ─────────────────────────────────────────────────────────────────────
type Metrica = {
  campo: keyof Noche;
  nombre: string;
  unidad: "min" | "lpm" | "ms" | "%";
  malo: "alto" | "bajo"; // qué dirección es la mala
};

const METRICAS_VEREDICTO: Metrica[] = [
  { campo: "fc_sueno_prom", nombre: "FC nocturna", unidad: "lpm", malo: "alto" },
  { campo: "fc_reposo", nombre: "FC en reposo", unidad: "lpm", malo: "alto" },
  { campo: "total_min", nombre: "sueño total", unidad: "min", malo: "bajo" },
  { campo: "despierto_min", nombre: "tiempo despierto", unidad: "min", malo: "alto" },
  { campo: "vfc_ms", nombre: "VFC", unidad: "ms", malo: "bajo" },
];

export type Desvio = {
  nombre: string;
  delta: number;
  unidad: string;
  z: number;
  malo: boolean;
};

export type Veredicto = {
  titulo: string;
  sub: string;
  desvios: Desvio[];
  provisorio: boolean; // línea base con < 28 noches
};

function valores(noches: Noche[], campo: keyof Noche): number[] {
  return noches.map((n) => n[campo]).filter((v): v is number => typeof v === "number");
}

// El veredicto compara ANOCHE contra tu banda de los 28 días previos.
// Regla anti-alarmismo: una noche fuera de banda es "dato", no drama.
export function veredicto(anoche: Noche, previas: Noche[]): Veredicto {
  const ultimas28 = previas.slice(0, 28);
  const provisorio = ultimas28.filter((n) => n.total_min != null).length < 28;

  const desvios: Desvio[] = [];
  for (const m of METRICAS_VEREDICTO) {
    const x = anoche[m.campo];
    if (typeof x !== "number") continue;
    const historicos = valores(ultimas28, m.campo);
    if (historicos.length < 7) continue;
    const z = zRobusto(x, historicos);
    const med = mediana(historicos);
    if (z == null || med == null || Math.abs(z) <= 2) continue;
    desvios.push({
      nombre: m.nombre,
      delta: Math.round((x - med) * 10) / 10,
      unidad: m.unidad,
      z,
      malo: m.malo === "alto" ? z > 0 : z < 0,
    });
  }
  desvios.sort((a, b) => Math.abs(b.z) - Math.abs(a.z));

  const malos = desvios.filter((d) => d.malo);
  const total = anoche.total_min;
  const despierto = anoche.despierto_min ?? 0;

  let titulo: string;
  let sub: string;
  if (total == null) {
    titulo = "Anoche no llegó la medición";
    sub = "Revisá que el Atajo haya corrido, o cargá la noche a mano.";
  } else if (malos.length === 0 && despierto <= 25) {
    titulo = "Fue una buena noche";
    sub = "Todo dentro de tu normal. Que el día lo acompañe.";
  } else if (despierto > 45 || (anoche.despertares ?? 0) >= 3) {
    titulo = "Fue una noche entrecortada";
    sub = "Dormiste de a tramos, pero dormiste. Vamos de a poco esta mañana.";
  } else if (malos.length > 0) {
    titulo = "Una noche con señales";
    const d = malos[0];
    const signo = d.delta > 0 ? "+" : "−";
    sub = `Tu ${d.nombre} estuvo ${signo}${Math.abs(d.delta)} ${d.unidad} respecto de tu normal.`;
  } else {
    titulo = "Una noche tranquila";
    sub = "Nada fuera de tu banda. Seguimos juntando datos.";
  }

  return { titulo, sub, desvios, provisorio };
}

// ─────────────────────────────────────────────────────────────────────
// Señales: hábitos vs. resultados, con honestidad estadística
// ─────────────────────────────────────────────────────────────────────
type Factor = {
  id: string;
  nombre: string;
  descripcion: string;
  // true = noche CON el hábito, false = sin, null = sin dato
  aplica: (n: Noche) => boolean | null;
};

const FACTORES: Factor[] = [
  {
    id: "cena_tardia",
    nombre: "Cena después de las 22",
    descripcion: "Última comida a las 22:00 o más tarde",
    aplica: (n) => {
      const m = horaAMinutosNocturnos(n.cena_hora);
      return m == null ? null : m >= 22 * 60;
    },
  },
  {
    id: "cena_pesada",
    nombre: "Cena pesada",
    descripcion: "Pesadez 4 o 5 sobre 5",
    aplica: (n) => (n.cena_pesadez == null ? null : n.cena_pesadez >= 4),
  },
  {
    id: "alcohol",
    nombre: "Alcohol",
    descripcion: "Al menos un trago",
    aplica: (n) => (n.alcohol == null ? null : n.alcohol > 0),
  },
  {
    id: "cafeina_tarde",
    nombre: "Café después de las 15",
    descripcion: "Última cafeína a las 15:00 o más tarde",
    aplica: (n) => {
      if (n.cafeina_hora == null) return null;
      const m = n.cafeina_hora.match(/^(\d{1,2}):/);
      return m ? parseInt(m[1], 10) >= 15 : null;
    },
  },
  {
    id: "entreno",
    nombre: "Entrenamiento",
    descripcion: "Día previo con entreno (según el reloj o tu registro)",
    aplica: (n) => {
      if (n.entreno_min != null) return n.entreno_min > 0;
      if (n.entreno_percibido != null) return n.entreno_percibido > 0;
      return null;
    },
  },
  {
    id: "estres",
    nombre: "Día de estrés alto",
    descripcion: "Estrés 4 o 5 sobre 5",
    aplica: (n) => (n.estres == null ? null : n.estres >= 4),
  },
];

type Resultado = {
  campo: keyof Noche;
  nombre: string;
  unidad: string;
  bueno: "alto" | "bajo";
};

const RESULTADOS: Resultado[] = [
  { campo: "total_min", nombre: "sueño total", unidad: "min", bueno: "alto" },
  { campo: "despierto_min", nombre: "tiempo despierto", unidad: "min", bueno: "bajo" },
  { campo: "fc_sueno_prom", nombre: "FC nocturna", unidad: "lpm", bueno: "bajo" },
  { campo: "vfc_ms", nombre: "VFC", unidad: "ms", bueno: "alto" },
  { campo: "animo_manana", nombre: "ánimo al despertar", unidad: "pts", bueno: "alto" },
];

export type Nivel = "sin_datos" | "juntando" | "senal" | "asociacion";

export type Hallazgo = {
  factorId: string;
  factor: string;
  descripcion: string;
  nivel: Nivel;
  nCon: number;
  nSin: number;
  // presente sólo cuando hay algo que decir:
  efecto?: {
    resultado: string;
    deltaTexto: string; // "~32 min menos de sueño total"
    q: number;
  };
};

const MIN_GRUPO = 5; // por debajo de esto no se calcula nada
const MIN_SENAL = 10; // noches en el grupo menor para "señal"
const MIN_ASOCIACION = 20;

export function hallazgos(noches: Noche[]): Hallazgo[] {
  const conMedicion = noches.filter((n) => n.total_min != null);

  type Candidato = {
    factor: Factor;
    resultado: Resultado;
    p: number;
    delta: number;
    nCon: number;
    nSin: number;
  };
  const candidatos: Candidato[] = [];
  const porFactor = new Map<string, { nCon: number; nSin: number }>();

  for (const f of FACTORES) {
    const con: Noche[] = [];
    const sin: Noche[] = [];
    for (const n of conMedicion) {
      const a = f.aplica(n);
      if (a === true) con.push(n);
      else if (a === false) sin.push(n);
    }
    porFactor.set(f.id, { nCon: con.length, nSin: sin.length });
    if (Math.min(con.length, sin.length) < MIN_GRUPO) continue;

    for (const r of RESULTADOS) {
      const a = valores(con, r.campo);
      const b = valores(sin, r.campo);
      if (Math.min(a.length, b.length) < MIN_GRUPO) continue;
      const test = mannWhitney(a, b);
      const delta = hodgesLehmann(a, b);
      if (!test || delta == null) continue;
      candidatos.push({ factor: f, resultado: r, p: test.p, delta, nCon: a.length, nSin: b.length });
    }
  }

  // Corrección por comparaciones múltiples sobre TODOS los tests corridos.
  const qs = ajustarFDR(candidatos.map((c) => c.p));

  // Mejor efecto por factor (el de menor q).
  const mejorPorFactor = new Map<string, { c: Candidato; q: number }>();
  candidatos.forEach((c, i) => {
    const prev = mejorPorFactor.get(c.factor.id);
    if (!prev || qs[i] < prev.q) mejorPorFactor.set(c.factor.id, { c, q: qs[i] });
  });

  const lista: Hallazgo[] = FACTORES.map((f) => {
    const conteo = porFactor.get(f.id) ?? { nCon: 0, nSin: 0 };
    const menor = Math.min(conteo.nCon, conteo.nSin);
    const mejor = mejorPorFactor.get(f.id);

    let nivel: Nivel = "sin_datos";
    if (menor >= MIN_GRUPO) nivel = "juntando";
    let efecto: Hallazgo["efecto"];

    if (mejor) {
      const { c, q } = mejor;
      const grupoMenor = Math.min(c.nCon, c.nSin);
      const esSenal = grupoMenor >= MIN_SENAL && q < 0.1;
      const esAsociacion = grupoMenor >= MIN_ASOCIACION && q < 0.05;
      if (esAsociacion) nivel = "asociacion";
      else if (esSenal) nivel = "senal";

      if (esSenal || esAsociacion) {
        const d = Math.round(c.delta);
        const peor =
          c.resultado.bueno === "alto" ? d < 0 : d > 0;
        const direccion = d > 0 ? "más" : "menos";
        const texto =
          c.resultado.unidad === "min"
            ? `${minutosATexto(Math.abs(d))} ${direccion} de ${c.resultado.nombre}`
            : `${Math.abs(d)} ${c.resultado.unidad} ${direccion} de ${c.resultado.nombre}`;
        efecto = {
          resultado: c.resultado.nombre,
          deltaTexto: `${texto}${peor ? "" : " (a favor)"}`,
          q,
        };
      }
    }

    return {
      factorId: f.id,
      factor: f.nombre,
      descripcion: f.descripcion,
      nivel,
      nCon: conteo.nCon,
      nSin: conteo.nSin,
      efecto,
    };
  });

  const orden: Record<Nivel, number> = { asociacion: 0, senal: 1, juntando: 2, sin_datos: 3 };
  return lista.sort((a, b) => orden[a.nivel] - orden[b.nivel]);
}

// ─────────────────────────────────────────────────────────────────────
// Regularidad y circadiano (versión simple y honesta del MVP)
// ─────────────────────────────────────────────────────────────────────
export type Circadiano = {
  puntoMedio: string | null; // "3:19"
  jetlagSocialMin: number | null;
  eficiencia: number | null; // % promedio 14 días
  deudaMin: number | null; // vs. necesidad estimada, 14 días
};

function puntoMedioMin(n: Noche): number | null {
  if (!n.dormido_a || !n.despertado_a) return null;
  const d = new Date(n.dormido_a).getTime();
  const w = new Date(n.despertado_a).getTime();
  if (!(w > d)) return null;
  const medio = new Date((d + w) / 2);
  // minutos "nocturnos" (madrugada +24h) en hora argentina
  const hh = parseInt(
    new Intl.DateTimeFormat("es-AR", { timeZone: "America/Argentina/Cordoba", hour: "2-digit", hour12: false }).format(medio),
    10
  );
  const mm = parseInt(
    new Intl.DateTimeFormat("es-AR", { timeZone: "America/Argentina/Cordoba", minute: "2-digit" }).format(medio),
    10
  );
  let min = hh * 60 + mm;
  if (min > 12 * 60) min -= 24 * 60; // 23:30 → −30, para promediar alrededor de la medianoche
  return min;
}

export function circadiano(noches: Noche[]): Circadiano {
  const ultimas14 = noches.slice(0, 14);

  const medios = ultimas14.map(puntoMedioMin).filter((v): v is number => v != null);
  const mediosSemana = ultimas14
    .filter((n) => !esFinde(n.fecha))
    .map(puntoMedioMin)
    .filter((v): v is number => v != null);
  const mediosFinde = ultimas14
    .filter((n) => esFinde(n.fecha))
    .map(puntoMedioMin)
    .filter((v): v is number => v != null);

  const medio = mediana(medios);
  let puntoMedio: string | null = null;
  if (medio != null) {
    const norm = medio < 0 ? medio + 24 * 60 : medio;
    puntoMedio = `${Math.floor(norm / 60)}:${String(Math.round(norm % 60)).padStart(2, "0")}`;
  }

  let jetlag: number | null = null;
  if (mediosSemana.length >= 3 && mediosFinde.length >= 2) {
    const a = mediana(mediosSemana);
    const b = mediana(mediosFinde);
    if (a != null && b != null) jetlag = Math.round(Math.abs(b - a));
  }

  const efis = ultimas14
    .map((n) => {
      if (!n.dormido_a || !n.despertado_a || n.total_min == null) return null;
      const cama = (new Date(n.despertado_a).getTime() - new Date(n.dormido_a).getTime()) / 60000;
      return cama > 0 ? (100 * n.total_min) / cama : null;
    })
    .filter((v): v is number => v != null && isFinite(v));
  const eficiencia = efis.length >= 5 ? Math.round(mediana(efis)!) : null;

  const totales = valores(ultimas14, "total_min");
  const NECESIDAD = 7.5 * 60; // ajustable a futuro; explícito, no mágico
  const deudaMin =
    totales.length >= 5
      ? Math.round(totales.reduce((acc, t) => acc + (NECESIDAD - t), 0))
      : null;

  return { puntoMedio, jetlagSocialMin: jetlag, eficiencia, deudaMin };
}
