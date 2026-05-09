import Image from "next/image";
import Link from "next/link";
import { CertificateIcon } from "@/components/Icons";
import Carousel3D, { type Carousel3DSlide } from "@/components/Carousel3D";

const ANMAT_ALG_URL = "https://listadoalg.anmat.gob.ar/Home";
const CAPALIGLU_URL = "https://capaliglu.org.ar/";

const LOCAL_PHOTOS = [
  { id: "sector0", src: "/assets/local/Sector0.PNG", alt: "Sector de trabajo del establecimiento elaborador" },
  { id: "batidora", src: "/assets/local/Batidora.PNG", alt: "Batidora industrial" },
  { id: "sector1", src: "/assets/local/Sector1.PNG", alt: "Sector de elaboración" },
  { id: "sector2", src: "/assets/local/Sector2.PNG", alt: "Sector de producción" },
  { id: "bacha", src: "/assets/local/Bacha.PNG", alt: "Bacha de lavado" },
  { id: "sector3", src: "/assets/local/Sector3.png", alt: "Sector de trabajo" },
  { id: "deposito", src: "/assets/local/Deposito.PNG", alt: "Depósito de materias primas" },
];

const localSlides: Carousel3DSlide[] = LOCAL_PHOTOS.map((photo) => ({
  id: photo.id,
  content: (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#faf6ee",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(60,4,14,0.15)",
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover"
        sizes="320px"
      />
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
            <a
              href="/assets/certificados/rne-1.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 relative block h-48 overflow-hidden transition hover:opacity-90"
              style={{ backgroundColor: "#faf6ee", borderRadius: "8px" }}
              aria-label="Ver certificado R.N.E. 04006318 en tamaño completo"
            >
              <Image
                src="/assets/certificados/rne-1.png"
                alt="Certificado R.N.E. 04006318"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
            </a>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              R.N.E. 04006318
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Establecimiento elaborador certificado por ANMAT.
              <br />
              <a
                href="/assets/certificados/rne-1.png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold underline-offset-2 hover:underline"
                style={{ color: "#5C0A14" }}
              >
                Ver certificado →
              </a>
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
              Estamos en el listado oficial de ANMAT. Buscanos — y de paso ya
              tenés para chequear otras marcas cuando tengas dudas.
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
          <article className="p-6 md:col-span-3 flex flex-col items-start sm:flex-row sm:items-center sm:gap-8" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 sm:mb-0 relative h-16 w-48 shrink-0">
              <Image
                src="/logo-capaliglu.png"
                alt="CAPALIGLU — Cámara Argentina de Productores de Alimentos Libres de Gluten"
                fill
                className="object-contain object-left"
                sizes="192px"
              />
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

          <Carousel3D slides={localSlides} slideWidth={300} slideHeight={400} />
        </div>
      </div>
    </section>
  );
}
