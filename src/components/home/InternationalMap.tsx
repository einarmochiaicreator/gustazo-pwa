// Stylized SVG "constellation" map of Europe with the 6 countries Gustazo
// trained in. Not an accurate cartographic projection — geometry is tuned for
// readability over realism.

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

// Order draws the connecting line as a "journey" — visual storytelling.
const ROUTE = ["es", "fr", "en", "de", "pl", "it"];

// Rough abstract silhouette of Europe — purely decorative
const EUROPE_PATH =
  "M 180 80 " +
  "Q 200 60, 270 80 " +
  "Q 350 50, 440 70 " +
  "Q 550 60, 640 100 " +
  "Q 700 130, 700 200 " +
  "Q 690 280, 620 300 " +
  "Q 550 320, 480 380 " +
  "Q 440 420, 380 410 " +
  "Q 320 400, 260 420 " +
  "Q 200 430, 160 380 " +
  "Q 130 320, 145 250 " +
  "Q 130 180, 150 130 " +
  "Q 165 95, 180 80 Z";

export default function InternationalMap() {
  const byId = Object.fromEntries(COUNTRIES.map((c) => [c.id, c]));

  return (
    <svg
      viewBox="0 0 800 500"
      className="h-auto w-full"
      style={{ maxHeight: "500px" }}
      role="img"
      aria-label="Mapa estilizado de Europa con los seis países donde nos formamos"
    >
      <defs>
        <radialGradient id="dot-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#C9A227" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="europe-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#5C0A14" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect
        x="2"
        y="2"
        width="796"
        height="496"
        fill="none"
        stroke="rgba(92,10,20,0.18)"
        strokeWidth="1"
      />

      {/* Subtle grid background */}
      <g stroke="rgba(92,10,20,0.10)" strokeWidth="0.8">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
        ))}
      </g>

      {/* Stylized continent silhouette */}
      <path
        d={EUROPE_PATH}
        fill="url(#europe-fill)"
        stroke="#5C0A14"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeLinejoin="round"
      />

      {/* Cardinal direction markers */}
      <g
        fill="rgba(92,10,20,0.45)"
        fontSize="11"
        fontWeight="600"
        style={{ letterSpacing: "0.1em" }}
      >
        <text x="400" y="20" textAnchor="middle">N</text>
        <text x="785" y="254" textAnchor="end">E</text>
        <text x="400" y="490" textAnchor="middle">S</text>
        <text x="15" y="254" textAnchor="start">O</text>
      </g>

      {/* Connection lines — the "journey" */}
      <g
        stroke="#5C0A14"
        strokeWidth="1.8"
        strokeDasharray="6 6"
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
          {/* Glow */}
          <circle cx={country.cx} cy={country.cy} r="24" fill="url(#dot-gradient)" />
          {/* Outer ring */}
          <circle
            cx={country.cx}
            cy={country.cy}
            r="10"
            fill="#fff"
            stroke="#C9A227"
            strokeWidth="2"
          />
          {/* Solid dot */}
          <circle cx={country.cx} cy={country.cy} r="5" fill="#5C0A14" />

          {/* Label */}
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
