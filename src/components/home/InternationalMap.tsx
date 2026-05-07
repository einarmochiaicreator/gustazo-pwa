// Whiteboard-style sketch of Europe + UK, with Italy as its own peninsula.
// Hand-tuned bezier paths to capture the recognizable features:
//   - Iberian peninsula (square chunk SW)
//   - Brittany pointing west
//   - Italian boot (separate piece) with toe and heel
//   - Greek peninsula sticking south-east
//   - UK as a separate island

interface Country {
  id: string;
  label: string;
  cx: number;
  cy: number;
  align: "left" | "right";
}

const COUNTRIES: Country[] = [
  { id: "en", label: "Inglaterra", cx: 220, cy: 130, align: "right" },
  { id: "pl", label: "Polonia",    cx: 600, cy: 175, align: "left"  },
  { id: "de", label: "Alemania",   cx: 460, cy: 200, align: "right" },
  { id: "fr", label: "Francia",    cx: 295, cy: 240, align: "right" },
  { id: "it", label: "Italia",     cx: 430, cy: 365, align: "left"  },
  { id: "es", label: "España",     cx: 165, cy: 360, align: "right" },
];

const ROUTE = ["es", "fr", "en", "de", "pl", "it"];

// Mainland Europe (excluding Italy peninsula and UK)
const MAINLAND_PATH =
  "M 110 415 " +
  "Q 80 370 80 315 " +              // Portugal Atlantic
  "Q 85 275 130 265 " +             // up to Galicia
  "Q 175 270 220 285 " +            // Cantabrian coast (north Spain)
  "Q 230 245 180 220 " +            // up into Bay of Biscay → Brittany W tip
  "Q 175 198 220 198 " +            // Channel coast going east
  "Q 290 192 360 180 " +            // North France → Belgium → North Germany
  "Q 460 160 560 150 " +            // across to Polish Baltic
  "Q 640 145 690 155 " +            // NE Polish/Baltic coast
  "Q 725 175 720 220 " +            // NE corner
  "Q 720 270 700 310 " +            // east frontier going south
  "Q 670 360 625 400 " +            // approach Greek peninsula
  "Q 600 430 580 420 " +            // Greek south
  "Q 555 395 535 375 " +            // up the Greek west / Albania
  "Q 510 350 485 310 " +            // Adriatic east → Trieste
  "Q 460 290 425 290 " +            // notch in around Italy entry
  "Q 390 290 355 300 " +            // Switzerland
  "Q 315 312 275 325 " +            // S France Mediterranean
  "Q 230 355 200 385 " +            // N Spain Med → Andalusia
  "Q 150 410 110 415 Z";            // back to Gibraltar

// Italy boot — separate peninsula
const ITALY_PATH =
  "M 405 290 " +
  "Q 395 325 410 365 " +            // Tyrrhenian (W) coast going down
  "Q 420 405 425 425 " +            // toward toe
  "Q 425 442 437 432 " +            // toe pointing SW
  "Q 455 432 475 415 " +            // sole going east
  "Q 478 388 465 360 " +            // east coast going up
  "Q 450 325 437 290 " +            // Adriatic-side back to top
  "Q 420 282 405 290 Z";            // close

// UK — Britain
const UK_PATH =
  "M 220 75 " +
  "Q 188 85 175 120 " +             // West Scotland → west Wales
  "Q 165 150 180 180 " +            // Wales / SW England
  "Q 185 200 205 200 " +            // South coast (Cornwall area)
  "Q 235 205 258 190 " +            // South coast going east (Kent)
  "Q 275 160 268 128 " +            // East coast (North Sea)
  "Q 263 92 240 78 " +              // NE Scotland
  "Q 225 72 220 75 Z";              // close

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

      {/* Continent + Italy + UK — whiteboard marker outlines */}
      <g
        fill="rgba(201,162,39,0.08)"
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
