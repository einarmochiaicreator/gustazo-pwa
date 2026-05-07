// Stylized SVG "constellation" map of Europe with the 6 countries Gustazo
// trained in. Not an accurate cartographic projection — geometry tuned for
// readability, not realism.

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
      </defs>

      {/* Subtle background fill inside the frame */}
      <rect x="0" y="0" width="800" height="500" fill="#faf6ee" />

      {/* Stronger grid */}
      <g stroke="#5C0A14" strokeWidth="1" opacity="0.18">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
        ))}
      </g>

      {/* Tick marks at edges — like a map ruler */}
      <g stroke="#5C0A14" strokeWidth="1.5" opacity="0.55">
        {/* top */}
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`tt${i}`} x1={i * 50} y1="0" x2={i * 50} y2={i % 2 === 0 ? 10 : 5} />
        ))}
        {/* bottom */}
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`tb${i}`} x1={i * 50} y1="500" x2={i * 50} y2={500 - (i % 2 === 0 ? 10 : 5)} />
        ))}
        {/* left */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`tl${i}`} x1="0" y1={i * 50} x2={i % 2 === 0 ? 10 : 5} y2={i * 50} />
        ))}
        {/* right */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`tr${i}`} x1="800" y1={i * 50} x2={800 - (i % 2 === 0 ? 10 : 5)} y2={i * 50} />
        ))}
      </g>

      {/* Strong frame */}
      <rect
        x="0"
        y="0"
        width="800"
        height="500"
        fill="none"
        stroke="#5C0A14"
        strokeWidth="2.5"
      />

      {/* Cardinal direction markers */}
      <g
        fill="#5C0A14"
        fontSize="16"
        fontWeight="700"
        style={{ letterSpacing: "0.15em" }}
      >
        <text x="400" y="36" textAnchor="middle">N</text>
        <text x="770" y="258" textAnchor="end">E</text>
        <text x="400" y="478" textAnchor="middle">S</text>
        <text x="30" y="258" textAnchor="start">O</text>
      </g>

      {/* Connection lines — the "journey" */}
      <g
        stroke="#5C0A14"
        strokeWidth="2"
        strokeDasharray="7 6"
        fill="none"
        opacity="0.75"
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
          <circle cx={country.cx} cy={country.cy} r="26" fill="url(#dot-gradient)" />
          {/* White ring */}
          <circle
            cx={country.cx}
            cy={country.cy}
            r="11"
            fill="#fff"
            stroke="#C9A227"
            strokeWidth="2.5"
          />
          {/* Solid dot */}
          <circle cx={country.cx} cy={country.cy} r="5" fill="#5C0A14" />

          {/* Label */}
          <text
            x={country.align === "left" ? country.cx - 20 : country.cx + 20}
            y={country.cy + 5}
            textAnchor={country.align === "left" ? "end" : "start"}
            fontSize="15"
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
