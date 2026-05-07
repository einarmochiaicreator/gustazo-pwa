import Image from "next/image";
import Link from "next/link";
import { CertificateIcon } from "@/components/Icons";
import Carousel3D, { type Carousel3DSlide } from "@/components/Carousel3D";

const ANMAT_ALG_URL = "https://listadoalg.anmat.gob.ar/Home";
const CAPALIGLU_URL = "https://capaliglu.org.ar/";

// TODO: reemplazar por fotos reales de /assets/local/
const LOCAL_PHOTOS = [
  { id: 1, alt: "Mesada de acero inoxidable" },
  { id: 2, alt: "Freezer y conservación" },
  { id: 3, alt: "Balanza y control de lote" },
  { id: 4, alt: "Espacio de trabajo" },
];

const localSlides: Carousel3DSlide[] = LOCAL_PHOTOS.map((photo) => ({
  id: photo.id,
  content: (
    <div
      className="flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#faf6ee",
        borderRadius: "4px",
        boxShadow: "0 8px 24px rgba(60,4,14,0.15)",
      }}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-center px-4" style={{ color: "#5C0A14", opacity: 0.4 }}>
        {photo.alt}
      </span>
    </div>
  ),
}));

export default function SafetyProof() {
  return (
    <section style={{ backgroundColor: "#faf6ee" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#5C0A14" }}
        >
          Lo que hay detrás de cada paquete.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bloque 1 — Certificado */}
          <article className="p-6" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 flex h-40 items-center justify-center" style={{ backgroundColor: "#faf6ee" }}>
              {/* TODO: reemplazar por <Image> con /assets/certificados/rne.jpg */}
              <CertificateIcon className="h-14 w-14" style={{ color: "#5C0A14", opacity: 0.4 }} />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              R.N.E. 04006318
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Establecimiento elaborador certificado por ANMAT.
            </p>
          </article>

          {/* Bloque 2 — RNPA */}
          <article className="p-6" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 flex h-40 items-center justify-center" style={{ backgroundColor: "#faf6ee" }}>
              {/* TODO: galería de R.N.P.A. en /assets/certificados/ */}
              <CertificateIcon className="h-14 w-14" style={{ color: "#5C0A14", opacity: 0.4 }} />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Cada producto, registrado
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Cada producto con su Registro Nacional de Producto Alimenticio.
            </p>
          </article>

          {/* Bloque 3 — ANMAT */}
          <article className="p-6 flex flex-col" style={{ backgroundColor: "#fff" }}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Buscanos en ANMAT
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Estamos en el listado oficial de ANMAT. Buscanos — y de paso fijate
              qué otras marcas están y cuáles no.
            </p>
            <a
              href={ANMAT_ALG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start px-4 py-2 text-xs font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "8px" }}
            >
              Ir al Listado ALG →
            </a>
          </article>

          {/* Bloque 5 — CAPALIGLU */}
          <article className="p-6 md:col-span-3 flex flex-col items-start sm:flex-row sm:items-center sm:gap-6" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 sm:mb-0 flex h-20 w-32 shrink-0 items-center justify-center" style={{ backgroundColor: "#faf6ee" }}>
              {/* TODO: logo CAPALIGLU en /assets/logos/ */}
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#5C0A14", opacity: 0.5 }}>
                CAPALIGLU
              </span>
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
                Socios activos
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                Somos socios activos de la Cámara Argentina de Productores de Alimentos Libres de Gluten.{" "}
                <a
                  href={CAPALIGLU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition hover:opacity-80"
                  style={{ color: "#5C0A14", textDecorationColor: "#C9A227" }}
                >
                  capaliglu.org.ar →
                </a>
              </p>
            </div>
          </article>
        </div>

        {/* Cómo es nuestro espacio — carrusel 3D */}
        <div className="mt-20">
          <h3 className="mb-2 text-2xl font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
            Cómo es nuestro espacio
          </h3>
          <p className="mb-10 text-sm" style={{ color: "#7a5a5e" }}>
            Acero inoxidable, controles de lote, y trazabilidad desde la materia prima hasta tu casa.
          </p>

          <Carousel3D slides={localSlides} slideWidth={300} slideHeight={300} />
        </div>
      </div>
    </section>
  );
}
