import Image from "next/image";

const ANMAT_ALG_URL = "https://listadoalg.anmat.gob.ar/Home";
// Aproximación al azul de la tipografía ANMAT
const ANMAT_BLUE = "#1B7DBB";

/**
 * Card de ANMAT con la misma estructura que RNE/RNPA: kicker + título arriba,
 * recuadro crema A4 portrait con todo el contenido adentro (imagen + texto + CTA).
 * Así el recuadro mide igual que los otros dos y la card termina a la misma
 * altura naturalmente, sin espacios en blanco al final.
 */
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

      {/* Recuadro A4 portrait — misma forma y tamaño que RNE/RNPA.
          Contenido (imagen + texto + botón) distribuido adentro. */}
      <div
        className="relative flex w-full flex-col gap-4 p-4"
        style={{
          backgroundColor: "#faf6ee",
          borderRadius: "8px",
          aspectRatio: "1 / 1.414",
          boxShadow: "0 4px 16px rgba(60,4,14,0.08)",
        }}
      >
        {/* Imagen oficial — entra completa con su aspect ratio nativo */}
        <a
          href={ANMAT_ALG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full overflow-hidden transition hover:opacity-95"
          style={{
            aspectRatio: "1.554 / 1",
            borderRadius: "4px",
          }}
          aria-label="Ir al listado oficial de ANMAT"
        >
          <Image
            src="/assets/certificados/anmat.png"
            alt="ANMAT — Administración Nacional de Medicamentos, Alimentos y Tecnología Médica"
            fill
            className="object-contain"
            sizes="280px"
          />
        </a>

        <p
          className="flex-1 text-sm leading-relaxed"
          style={{ color: "#1a0a0c" }}
        >
          Estamos en el listado oficial. Cualquier duda — sobre nosotros o
          cualquier marca — podés chequear ahí.
        </p>

        <a
          href={ANMAT_ALG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center self-stretch px-4 py-3 text-xs font-bold uppercase tracking-wide transition active:scale-95 hover:opacity-90"
          style={{
            backgroundColor: ANMAT_BLUE,
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Ir al listado ALG →
        </a>
      </div>
    </article>
  );
}
