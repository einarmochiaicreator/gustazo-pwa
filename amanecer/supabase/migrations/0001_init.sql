-- ═══════════════════════════════════════════════════════════════════
--  Nocturno · laboratorio personal de sueño
--
--  Convención central: cada fila de `nocturno_noches` representa UNA
--  noche, identificada por la FECHA EN QUE TE DESPERTASTE.
--  Todo el contexto (cena, alcohol, entreno, estrés) se refiere a la
--  tarde/noche ANTERIOR a ese despertar.
--
--  Las tablas van prefijadas con `nocturno_` porque el proyecto
--  Supabase `proyectos_einAR` es compartido entre varios proyectos.
-- ═══════════════════════════════════════════════════════════════════

create extension if not exists pgcrypto;

create table if not exists nocturno_noches (
  fecha                     date primary key,

  -- ── Lo que manda el Atajo desde HealthKit ────────────────────────
  dormido_a                 timestamptz,
  despertado_a              timestamptz,
  total_min                 integer,
  profundo_min              integer,
  rem_min                   integer,
  ligero_min                integer,
  despierto_min             integer,
  despertares               integer,
  fc_reposo                 numeric(5,1),
  fc_sueno_min              numeric(5,1),
  fc_sueno_prom             numeric(5,1),
  vfc_ms                    numeric(6,1),
  resp_rpm                  numeric(4,1),
  spo2                      numeric(4,1),
  temp_muneca               numeric(5,2),
  pasos_previo              integer,
  energia_activa_previo     integer,
  entreno_min               integer,
  entreno_kcal              integer,
  entreno_tipo              text,
  entreno_fin_a             timestamptz,

  -- ── Lo que cargás vos (el "por qué" que ningún sensor sabe) ──────
  cena_hora                 time,
  cena_pesadez              smallint check (cena_pesadez between 1 and 5),
  alcohol                   smallint check (alcohol >= 0),
  cafeina_hora              time,
  entreno_percibido         smallint check (entreno_percibido between 1 and 5),
  estres                    smallint check (estres between 1 and 5),
  pantallas_hora            time,
  siesta_min                integer check (siesta_min >= 0),
  animo_manana              smallint check (animo_manana between 1 and 5),
  notas                     text,

  -- ── Meta ─────────────────────────────────────────────────────────
  -- El ánimo al despertar es el campo que sólo se puede cargar a mano,
  -- así que sirve de marcador fiable de "esta noche tiene contexto".
  contexto_cargado          boolean generated always as (animo_manana is not null) stored,
  creado_a                  timestamptz not null default now(),
  actualizado_a             timestamptz not null default now()
);

comment on table  nocturno_noches is 'Una fila por noche, con clave = fecha de despertar. El contexto refiere a la tarde/noche anterior.';
comment on column nocturno_noches.temp_muneca is 'Desviación de temperatura de muñeca en °C respecto de tu línea base (puede ser negativa).';
comment on column nocturno_noches.entreno_min is 'Minutos de entrenamiento del día PREVIO al despertar — el que pudo afectar esta noche.';

-- Registro crudo de cada POST del Atajo. Es la herramienta de
-- diagnóstico cuando el Atajo "no anda": acá se ve qué llegó realmente.
create table if not exists nocturno_ingestas (
  id            bigserial primary key,
  recibido_a    timestamptz not null default now(),
  payload       jsonb not null,
  ok            boolean not null default true,
  detalle       text
);

create index if not exists nocturno_ingestas_recibido_idx
  on nocturno_ingestas (recibido_a desc);

-- Fase 3 del plan: experimentos A/B contra vos mismo.
create table if not exists nocturno_experimentos (
  id            uuid primary key default gen_random_uuid(),
  titulo        text not null,
  hipotesis     text,
  regla         text not null,
  desde         date not null,
  hasta         date,
  estado        text not null default 'activo'
                check (estado in ('activo','terminado','abandonado')),
  conclusion    text,
  creado_a      timestamptz not null default now()
);

-- ── Mantener actualizado_a al día ──────────────────────────────────
create or replace function nocturno_tocar_actualizado()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.actualizado_a := now();
  return new;
end;
$$;

drop trigger if exists nocturno_noches_actualizado on nocturno_noches;
create trigger nocturno_noches_actualizado
  before update on nocturno_noches
  for each row execute function nocturno_tocar_actualizado();

-- ── Seguridad ──────────────────────────────────────────────────────
-- Son datos de salud: nadie los toca desde el navegador.
-- RLS activo SIN políticas = negado para anon y authenticated.
-- El único acceso es el server de Next.js con la service_role key,
-- que hace bypass de RLS y está detrás del login de la app.
alter table nocturno_noches       enable row level security;
alter table nocturno_ingestas     enable row level security;
alter table nocturno_experimentos enable row level security;
