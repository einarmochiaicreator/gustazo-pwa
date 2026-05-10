const ANMAT_ALG_URL = "https://listadoalg.anmat.gob.ar/Home";

/**
 * Card animada para invitar al usuario a buscar Gustazo en el listado ALG de
 * ANMAT. Tiene un icono de lupa con pulso suave y una barra de búsqueda con
 * efecto typewriter (la palabra "Gustazo Gluten Free" se va escribiendo
 * sola y borrándose en loop).
 */
export default function AnmatCard() {
  return (
    <article
      className="relative flex h-full flex-col items-center justify-between overflow-hidden p-8 text-center"
      style={{
        background: "linear-gradient(160deg, #5C0A14 0%, #3e0009 100%)",
        borderRadius: "8px",
        boxShadow: "0 6px 20px rgba(60,4,14,0.18)",
      }}
    >
      {/* Patrón sutil de puntos al fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(201,162,39,0.12) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.55,
        }}
      />

      {/* Top — kicker + título */}
      <div className="relative z-10">
        <p
          className="mb-2 text-xs font-bold uppercase tracking-widest"
          style={{ color: "#C9A227" }}
        >
          Listado oficial
        </p>
        <h3
          className="text-2xl font-bold uppercase tracking-wide md:text-3xl"
          style={{ color: "#fff" }}
        >
          ANMAT
        </h3>
      </div>

      {/* Centro — lupa + barra de búsqueda con typewriter */}
      <div className="relative z-10 flex w-full flex-col items-center">
        <div
          className="anmat-pulse mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          style={{
            backgroundColor: "rgba(201,162,39,0.12)",
            border: "2px solid rgba(201,162,39,0.4)",
          }}
        >
          <SearchIcon className="h-10 w-10" style={{ color: "#C9A227" }} />
        </div>

        {/* Search bar simulada con typewriter */}
        <div
          className="flex w-full items-center gap-2 px-3 py-2.5 text-left"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(201,162,39,0.3)",
            borderRadius: "8px",
            minHeight: "44px",
          }}
        >
          <SearchIcon
            className="h-4 w-4 shrink-0"
            style={{ color: "rgba(201,162,39,0.85)" }}
          />
          <span
            className="anmat-typing flex-1 text-sm font-medium"
            style={{ color: "#fff" }}
          >
            Gustazo Gluten Free
          </span>
          <span
            aria-hidden
            className="anmat-cursor h-4 w-px shrink-0"
            style={{ backgroundColor: "#C9A227" }}
          />
        </div>
      </div>

      {/* Bottom — descripción + CTA */}
      <div className="relative z-10 w-full">
        <p
          className="mb-5 text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Estamos en el listado oficial. Cualquier duda — sobre nosotros o
          cualquier marca — podés chequear ahí.
        </p>
        <a
          href={ANMAT_ALG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wide transition hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "#C9A227",
            color: "#5C0A14",
            borderRadius: "8px",
          }}
        >
          Ir al listado ALG →
        </a>
      </div>
    </article>
  );
}

function SearchIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
