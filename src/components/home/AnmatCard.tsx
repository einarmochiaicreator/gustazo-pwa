import Image from "next/image";

const ANMAT_ALG_URL = "https://listadoalg.anmat.gob.ar/Home";

// La imagen oficial de ANMAT es landscape ~1.55:1; usamos esa misma proporción
// en el rectángulo para que la imagen entre nítida sin recorte ni pixelado.
const IMG_ASPECT = "1.554 / 1";

export default function AnmatCard() {
  return (
    <article
      className="flex flex-col p-5"
      style={{ backgroundColor: "#fff", borderRadius: "8px" }}
    >
      <p
        className="mb-1 text-xs font-bold uppercase tracking-widest"
        style={{ color: "#C9A227" }}
      >
        Listado oficial
      </p>
      <h3
        className="mb-4 text-lg font-semibold uppercase tracking-wide"
        style={{ color: "#5C0A14" }}
      >
        ANMAT
      </h3>

      {/* Imagen oficial — el rectángulo matchea la proporción de la imagen,
          así no hay zoom ni recorte: la imagen entra completa y nítida. */}
      <a
        href={ANMAT_ALG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full overflow-hidden transition hover:opacity-95"
        style={{
          backgroundColor: "#faf6ee",
          borderRadius: "8px",
          aspectRatio: IMG_ASPECT,
          boxShadow: "0 4px 16px rgba(60,4,14,0.08)",
          padding: "6px",
        }}
        aria-label="Ir al listado oficial de ANMAT"
      >
        <div className="relative h-full w-full">
          <Image
            src="/assets/certificados/anmat.png"
            alt="ANMAT — Administración Nacional de Medicamentos, Alimentos y Tecnología Médica"
            fill
            className="object-contain"
            sizes="320px"
          />
        </div>
      </a>

      <p
        className="mt-4 text-sm leading-relaxed"
        style={{ color: "#1a0a0c" }}
      >
        Estamos en el listado oficial. Cualquier duda — sobre nosotros o
        cualquier marca — podés chequear ahí.
      </p>

      <a
        href={ANMAT_ALG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center self-start px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition active:scale-95 hover:opacity-90"
        style={{
          backgroundColor: "#5C0A14",
          color: "#C9A227",
          borderRadius: "8px",
        }}
      >
        Ir al listado ALG →
      </a>
    </article>
  );
}
