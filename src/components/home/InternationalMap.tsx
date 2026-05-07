// Whiteboard-style sketch of Europe + UK, with Italy as its own peninsula.
// Marker-like outlines, no chart trappings.

interface Country {
  id: string;
  label: string;
  cx: number;
  cy: number;
  align: "left" | "right";
}

const COUNTRIES: Country[] = [
  { id: "en", label: "Inglaterra", cx: 230, cy: 130, align: "right" },
  { id: "pl", label: "Polonia",    cx: 600, cy: 160, align: "left"  },
  { id: "de", label: "Alemania",   cx: 470, cy: 175, align: "right" },
  { id: "fr", label: "Francia",    cx: 285, cy: 215, align: "right" },
  { id: "it", label: "Italia",     cx: 430, cy: 350, align: "left"  },
  { id: "es", label: "España",     cx: 215, cy: 380, align: "right" },
];

const ROUTE = ["es", "fr", "en", "de", "pl", "it"];

const MAINLAND_PATH =
  "M 145 400 " +
  "Q 130 360, 140 310 " +
  "Q 150 270, 195 250 " +
  "Q 235 230, 250 200 " +
  "Q 280 175, 380 160 " +
  "Q 480 145, 580 140 " +
  "Q 670 145, 695 200 " +
  "Q 700 260, 660 295 " +
  "Q 605 320, 545 325 " +
  "Q 500 330, 470 320 " +
  "Q 440 300, 410 290 " +
  "Q 385 285, 350 295 " +
  "Q 310 305, 270 325 " +
  "Q 230 350, 200 380 " +
  "Q 175 395, 155 405 " +
  "Q 145 405, 145 400 Z";

const ITALY_PATH =
  "M 405 295 " +
  "Q 400 320, 410 360 " +
  "Q 415 395, 420 415 " +
  "Q 425 430, 445 425 " +
  "Q 460 415, 460 395 " +
  "Q 458 360, 445 320 " +
  "Q 435 295, 420 290 " +
  "Q 410 285, 405 295 Z";

const UK_PATH =
  "M 215 90 " +
  "Q 195 105, 195 140 " +
  "Q 200 175, 230 185 " +
  "Q 255 188, 268 165 " +
  "Q 275 130, 260 105 " +
  "Q 240 90, 215 90 Z";

export default function InternationalMap() {
  const byId = Object.fromEntries(COUNTRIES.map((c) => [c.id, c]));

  return (
    <svg
      viewBox="0 0 800 500"
      className="h-auto w-full"
      style={{ maxHeight: "500px" }}
      role="img"
      aria-label="Mapa de Europa con los seis países donde nos formamos"
    >
      <defs>
        <radialGradient id="dot-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#C9A227" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Continent + UK + Italy — whiteboard marker outlines */}
      <g
        fill="rgba(201,162,39,0.07)"
        stroke="#5C0A14"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={MAINLAND_PATH} />
        <path d={ITALY_PATH} />
        <path d={UK_PATH} />
      </g>

      {/* Connection lines — the "journey" */}
      <g
        stroke="#5C0A14"
        strokeWidth="2"
        strokeDasharray="7 6"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      >
        {ROUTE.slice(0, -1).map((id, idx) => {
          const a = byId[id];
          const b = byId[ROUTE[idx + 1]];
          return <line key={`${id}-${ROUTE[idx + 1]}`} x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy} />;
        })}
      </g>

      {/* Country dots */}
      {COUNTRIES.map((country) => (
        <g key={country.id}>
          <circle cx={country.cx} cy={country.cy} r="24" fill="url(#dot-gradient)" />
          <circle
            cx={country.cx}
            cy={country.cy}
            r="10"
            fill="#fff"
            stroke="#C9A227"
            strokeWidth="2.5"
          />
          <circle cx={country.cx} cy={country.cy} r="5" fill="#5C0A14" />

          <text
            x={country.align === "left" ? country.cx - 18 : country.cx + 18}
            y={country.cy + 5}
            textAnchor={country.align === "left" ? "end" : "start"}
            fontSize="14"
            fontWeight="700"
            fill="#5C0A14"
            style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            {country.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
