// Minimal linear-stroke SVG icon library.
// All icons: viewBox 0 0 24 24, fill none, stroke currentColor, strokeWidth 1.5

type P = { className?: string; style?: React.CSSProperties };
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function MapPinIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M12 2C8.69 2 6 4.69 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.31-2.69-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

export function PhoneIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function MailIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export function CameraIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function ClockIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

export function CheckIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

export function TimerIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M9 2h6" />
      <path d="M12 2v3" />
    </svg>
  );
}

export function TargetIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function CalendarIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function CartIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
    </svg>
  );
}

export function SparkleIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

export function CelebrationIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M3 21l7-7" />
      <path d="M10.5 3.5l-1 5 5-1L10.5 3.5z" />
      <path d="M14.5 9.5l5.5 5.5" />
      <path d="M3 10l2 2" />
      <path d="M7 5l2 2" />
      <path d="M15 17l2 2" />
      <path d="M18 12l2 2" />
    </svg>
  );
}

export function FrownIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2} />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2} />
    </svg>
  );
}

export function ConstructionIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M2 20h20" />
      <path d="M6 20V10l6-6 6 6v10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function BreadIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M3 11.5C3 8.46 7.03 6 12 6s9 2.46 9 5.5c0 1.5-.7 2.85-1.87 3.85V19H4.87v-.65C3.7 17.35 3 16 3 14.5v-3z" />
      <path d="M7 19v1" />
      <path d="M17 19v1" />
    </svg>
  );
}

export function CakeIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 1.5 1 2 1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 8a1 1 0 01-1-1V5c0-.55.45-1 1-1a1 1 0 011 1v2a1 1 0 01-1 1z" />
      <path d="M12 8a1 1 0 01-1-1V5c0-.55.45-1 1-1a1 1 0 011 1v2a1 1 0 01-1 1z" />
      <path d="M17 8a1 1 0 01-1-1V5c0-.55.45-1 1-1a1 1 0 011 1v2a1 1 0 01-1 1z" />
    </svg>
  );
}

export function PastaIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6c3.31 0 6 2.69 6 6" />
      <path d="M12 6c-3.31 0-6 2.69-6 6" />
      <path d="M7 15l2.5-2.5" />
      <path d="M12 17l2.5-2.5" />
      <path d="M15 12l2 2" />
    </svg>
  );
}

export function LeafIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M11 20A7 7 0 014 13c0-7 7-10 7-10s7 3 7 10a7 7 0 01-7 7z" />
      <path d="M11 20V10" />
    </svg>
  );
}

export function FlaskIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M9 3h6" />
      <path d="M10 3v6l-4 9h12l-4-9V3" />
      <path d="M7 17h2" />
      <path d="M11 15h2" />
    </svg>
  );
}

export function WheatIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M2 22L16 8" />
      <path d="M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 010-4.95L8 6.05l.47.48A3.5 3.5 0 0113 5l1 1-1 1a3.5 3.5 0 01-4.95 0L7.05 6 6 7.05a3.5 3.5 0 000 4.95L8 14l-.47.47A3.5 3.5 0 012.53 12l.94-.47z" />
      <path d="M7.88 14.82L9 13.5l1 1a3.5 3.5 0 01-4.95 0L4 13.5l1-1a3.5 3.5 0 014.95 0L11 14l-1 1a3.5 3.5 0 010 4.95L9 21l-1-1a3.5 3.5 0 010-4.95L7.88 14.82z" />
    </svg>
  );
}

export function GearIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

export function ChartIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function CpuIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

export function CertificateIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function HeartIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

export function ChefHatIcon({ className, style }: P) {
  return (
    <svg className={className} style={style} {...base}>
      <path d="M6 13.87A4 4 0 017.41 6a5.11 5.11 0 019.18 0A4 4 0 0118 13.87V21H6v-7.13z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  );
}
