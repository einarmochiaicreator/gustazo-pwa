// Una fila = una noche, identificada por la fecha en que TE DESPERTASTE.
// Todo el contexto (cena, alcohol, entreno, estrés) refiere a la
// tarde/noche anterior a ese despertar.
export type Noche = {
  fecha: string; // YYYY-MM-DD

  // ── Lo que manda el Atajo desde HealthKit ──
  dormido_a: string | null;
  despertado_a: string | null;
  total_min: number | null;
  profundo_min: number | null;
  rem_min: number | null;
  ligero_min: number | null;
  despierto_min: number | null;
  despertares: number | null;
  fc_reposo: number | null;
  fc_sueno_min: number | null;
  fc_sueno_prom: number | null;
  vfc_ms: number | null;
  resp_rpm: number | null;
  spo2: number | null;
  temp_muneca: number | null;
  pasos_previo: number | null;
  energia_activa_previo: number | null;
  entreno_min: number | null;
  entreno_kcal: number | null;
  entreno_tipo: string | null;
  entreno_fin_a: string | null;

  // ── Lo que cargás vos ──
  cena_hora: string | null; // HH:MM:SS
  cena_pesadez: number | null; // 1-5
  alcohol: number | null; // tragos, 0 = nada
  cafeina_hora: string | null;
  entreno_percibido: number | null; // 1-5
  estres: number | null; // 1-5
  pantallas_hora: string | null;
  siesta_min: number | null;
  animo_manana: number | null; // 1-5
  notas: string | null;

  contexto_cargado: boolean;
};

// Campos numéricos que el Atajo puede mandar (whitelist del ingest).
export const CAMPOS_NUMERICOS = [
  "total_min",
  "profundo_min",
  "rem_min",
  "ligero_min",
  "despierto_min",
  "despertares",
  "fc_reposo",
  "fc_sueno_min",
  "fc_sueno_prom",
  "vfc_ms",
  "resp_rpm",
  "spo2",
  "temp_muneca",
  "pasos_previo",
  "energia_activa_previo",
  "entreno_min",
  "entreno_kcal",
] as const;

export const CAMPOS_FECHA_HORA = ["dormido_a", "despertado_a", "entreno_fin_a"] as const;

export const CAMPOS_TEXTO = ["entreno_tipo"] as const;

// Campos del formulario de contexto (los valida /api/contexto).
export const CAMPOS_CONTEXTO = {
  cena_hora: "hora",
  cena_pesadez: "escala",
  alcohol: "entero",
  cafeina_hora: "hora",
  entreno_percibido: "escala",
  estres: "escala",
  pantallas_hora: "hora",
  siesta_min: "entero",
  animo_manana: "escala",
  notas: "texto",
} as const;
