// Stylized SVG "constellation" map of Europe with the 6 countries Gustazo
// trained in. Not an accurate cartographic projection — geometry is tuned for
// readability over realism.

interface Country {
  id: string;
  label: string;
  cx: number;
  cy: number;
  align: "left" | "right" | "center";
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

      {/* Subtle grid background */}
      <g stroke="rgba(92,10,20,0.06)" strokeWidth="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
        ))}
      </g>

      {/* Connection lines — drawn behind dots */}
      <g
        stroke="#5C0A14"
        strokeWidth="1"
        strokeDasharray="4 4"
        fill="none"
        opacity="0.35"
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
          <circle cx={country.cx} cy={country.cy} r="22" fill="url(#dot-gradient)" />
          {/* Outer ring */}
          <circle
            cx={country.cx}
            cy={country.cy}
            r="9"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1.5"
            opacity="0.75"
          />
          {/* Solid dot */}
          <circle cx={country.cx} cy={country.cy} r="5" fill="#5C0A14" />
          <circle cx={country.cx} cy={country.cy} r="2" fill="#C9A227" />

          {/* Label */}
          <text
            x={country.align === "left" ? country.cx - 16 : country.cx + 16}
            y={country.cy + 4}
            textAnchor={country.align === "left" ? "end" : "start"}
            fontSize="14"
            fontWeight="600"
            fill="#5C0A14"
            style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            {country.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
