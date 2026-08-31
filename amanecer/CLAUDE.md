# Amanecer — laboratorio personal de sueño

App personal de Einar: cruza los datos que el Apple Watch deja en HealthKit
con el contexto de cada día (cena, alcohol, café, entreno, estrés) y diagnostica
qué hábitos le roban sueño, con honestidad estadística.

## Estado del proyecto (traspaso desde sesión remota, 31-ago-2026)

### Hecho ✅
- **Base de datos**: tablas `nocturno_noches`, `nocturno_ingestas`, `nocturno_experimentos`
  YA CREADAS en Supabase, proyecto `proyectos_einAR` (`nvdcwhoajvozxiwxhidp`).
  El SQL está en `supabase/migrations/0001_init.sql` como referencia —
  **NO volver a aplicarlo**. RLS activo sin políticas: sólo entra el server
  con la service_role key.
- **Config**: package.json (Next 14.2.35 + supabase-js, sin más deps), tailwind
  con tokens propios, tsconfig, .env.example.
- **Núcleo** (`src/lib/`): `tipos.ts` (una fila = una noche, clave = fecha de
  DESPERTAR; el contexto refiere a la tarde/noche anterior), `fechas.ts`
  (TZ America/Argentina/Cordoba), `estadistica.ts` (mediana/MAD/bandas,
  Mann-Whitney con empates, Hodges-Lehmann, FDR Benjamini-Hochberg),
  `analisis.ts` (fases del plan 0/1/2, veredicto matinal vs banda de 28 días,
  motor de señales con 4 niveles de honestidad, circadiano básico).
- **Auth** (`src/lib/sesion.ts` + `middleware.ts`): cookie HMAC con APP_CLAVE.
  Rutas libres: /entrar, /api/entrar, /api/ingest.
- **APIs** (`src/app/api/`): `ingest` (POST del Atajo: Bearer INGEST_TOKEN o
  ?token=, tolerante, merge sin pisar, loguea todo en nocturno_ingestas;
  GET ?ping=1 para probar), `entrar` (login), `contexto` (checklist:
  cuando="esta_noche" → fila de mañana, "anoche" → fila de hoy).
- **Base visual**: `globals.css` (clases .vidrio, .titular, .grano, .nivel,
  .puntos) y `layout.tsx` (fuentes vía <link>).

### Pendiente 🔜 (en orden)
1. `src/components/Paisaje.tsx` — fondo por escena (amanecer|dia|atardecer|noche).
   Einar tiene 4 imágenes generadas (¡usarlas TAL CUAL, no recrear en SVG!):
   ponerlas en `public/fondos/fondo-{amanecer,dia,atardecer,noche}.png` y que el
   componente haga `background-image` + object-cover. Mapeo: amanecer→Hoy y
   detalle de noche; día→Señales y Análisis; atardecer→Noches/historial y Lab;
   noche→Registro.
2. `src/components/Nav.tsx` — tab bar inferior de vidrio: Hoy / Noches / Señales / Registro.
3. Páginas (server components, usando lib/analisis):
   - `/` Hoy: veredicto de anoche + desvíos + estado de fase (0: "sólo mirar",
     sin juicios con <7 noches) + acceso a /registro y /atajo.
   - `/registro` (client): checklist binario ≤20 seg → POST /api/contexto.
     Selector "esta noche / anoche".
   - `/noches`: historial de barras (mediodía→mediodía), eficiencia, punto medio,
     jetlag social (lib circadiano).
   - `/senales`: lista de hallazgos() con su nivel y conteos n; textos honestos.
   - `/entrar` (client): clave → POST /api/entrar → redirect /.
   - `/atajo`: guía paso a paso del Atajo de iOS (Buscar muestras de salud →
     diccionario → Obtener contenido de URL POST a /api/ingest con el token),
     con la URL real y ejemplos del JSON. Incluir el GET ?ping=1 como prueba.
4. `public/manifest.json` + íconos PWA (192/512 + apple-touch-icon).
5. Deploy: Vercel → import repo → env vars de `.env.example` (la
   SUPABASE_SERVICE_ROLE_KEY sale de Supabase → Settings → API).
6. Después del deploy: armar el Atajo en el iPhone y probar el pipeline entero.

### Diseño (dirección "Amanecer" — aprobada por Einar)
- Tipos: **Cormorant Garamond** (titulares, clase .titular) + **Alegreya Sans** (todo lo demás).
  PROHIBIDO: Inter, Poppins, Playfair, DM Serif, Space Grotesk (los consideró "AI slop").
- Un solo tema oscuro cálido. Tarjetas .vidrio, esquinas 24px, grano .grano.
- Tono de los textos: compañero, rioplatense, CERO puntajes que califiquen
  (anti-ortosomnia). La app diagnostica, no reta.
- Mockups de referencia de las 8 pantallas: sesión remota de Claude
  ("Mejora de salud con datos del Apple Watch"), artifact "Un valle, cuatro cielos".

### Reglas del motor (no aflojar)
- El Watch acierta ~50% el sueño profundo: profundo/REM se muestran como
  estimación, nunca como verdad.
- Nada se afirma sin evidencia: niveles sin_datos → juntando → señal
  (grupo ≥10 y q<0.10) → asociación (≥20 y q<0.05). Deltas SIEMPRE en minutos
  reales (Hodges-Lehmann), nunca p-values pelados en la UI.
- Confusor conocido y aún no controlado: día de semana. Mencionarlo en la UI
  de señales ("podría ser el viernes, no el alcohol").

### El logro para Juegos Imperiales
Post ya redactado con el formato de la skill `logros-imperiales` (está en
~/.claude/skills/ de esta máquina). Capturas de las 8 pantallas ya entregadas.
Pendiente: publicar, y el banger sale cuando haya 3-4 semanas de datos reales.
