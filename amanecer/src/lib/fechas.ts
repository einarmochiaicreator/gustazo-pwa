const ZONA = "America/Argentina/Cordoba";

// "Hoy" en Argentina, como YYYY-MM-DD, sin importar dónde corra el server.
export function hoy(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: ZONA }).format(new Date());
}

export function haceDias(n: number, desde?: string): string {
  const base = desde ? new Date(desde + "T12:00:00Z") : new Date(hoy() + "T12:00:00Z");
  base.setUTCDate(base.getUTCDate() - n);
  return base.toISOString().slice(0, 10);
}

const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

export function fechaLarga(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return `${DIAS[d.getUTCDay()]} ${d.getUTCDate()} de ${MESES[d.getUTCMonth()]}`;
}

export function diaCorto(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return ["D", "L", "M", "M", "J", "V", "S"][d.getUTCDay()];
}

export function esFinde(iso: string): boolean {
  const d = new Date(iso + "T12:00:00Z").getUTCDay();
  return d === 0 || d === 6; // despertar de domingo o sábado
}

// Hora local (HH:MM) de un timestamptz, en la zona del usuario.
export function horaLocal(ts: string | null): string | null {
  if (!ts) return null;
  try {
    return new Intl.DateTimeFormat("es-AR", {
      timeZone: ZONA,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(ts));
  } catch {
    return null;
  }
}

// "HH:MM:SS" o "HH:MM" → minutos desde medianoche; horas de madrugada
// (< 12) se corren +24 h para poder comparar "22:30 < 01:15".
export function horaAMinutosNocturnos(hhmm: string | null): number | null {
  if (!hhmm) return null;
  const m = hhmm.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return null;
  let min = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
  if (min < 12 * 60) min += 24 * 60;
  return min;
}

export function minutosATexto(min: number | null): string {
  if (min == null || !isFinite(min)) return "—";
  const neg = min < 0;
  const abs = Math.round(Math.abs(min));
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  const cuerpo = h > 0 ? `${h} h ${m.toString().padStart(2, "0")} min` : `${m} min`;
  return neg ? `−${cuerpo}` : cuerpo;
}
