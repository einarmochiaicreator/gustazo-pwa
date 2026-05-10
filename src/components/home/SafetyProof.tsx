import Image from "next/image";
import Carousel3D, { type Carousel3DSlide } from "@/components/Carousel3D";
import CertificatesMarquee from "./CertificatesMarquee";
import AnmatCard from "./AnmatCard";

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

        {/* Trío principal — items-start para que cada card termine en su contenido
            natural, sin espacio vacío al final. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {/* Col 1 — RNE A4 portrait */}
          <article
            className="flex flex-col p-5"
            style={{ backgroundColor: "#fff", borderRadius: "8px" }}
          >
            <p
              className="mb-1 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C9A227" }}
            >
              Establecimiento
            </p>
            <h3
              className="mb-4 text-lg font-semibold uppercase tracking-wide"
              style={{ color: "#5C0A14" }}
            >
              R.N.E. 04006318
            </h3>

            <a
              href="/assets/certificados/rne-1.png"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full overflow-hidden transition hover:opacity-95"
              style={{
                backgroundColor: "#faf6ee",
                borderRadius: "8px",
                aspectRatio: "1 / 1.414",
                boxShadow: "0 4px 16px rgba(60,4,14,0.12)",
                padding: "8px",
              }}
              aria-label="Ver certificado R.N.E. 04006318 en tamaño completo"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/assets/certificados/rne-1.png"
                  alt="Certificado R.N.E. 04006318"
                  fill
                  className="object-contain"
                  sizes="320px"
                />
              </div>
            </a>
          </article>

          {/* Col 2 — RNPA marquee VERTICAL, mismo tamaño que el RNE */}
          <article
            className="flex flex-col p-5"
            style={{ backgroundColor: "#fff", borderRadius: "8px" }}
          >
            <p
              className="mb-1 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C9A227" }}
            >
              Registros oficiales
            </p>
            <h3
              className="mb-4 text-lg font-semibold uppercase tracking-wide"
              style={{ color: "#5C0A14" }}
            >
              Productos con RNPA
            </h3>

            <div
              className="w-full"
              style={{
                aspectRatio: "1 / 1.414",
                boxShadow: "0 4px 16px rgba(60,4,14,0.12)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <CertificatesMarquee />
            </div>
          </article>

          {/* Col 3 — ANMAT con imagen oficial */}
          <div className="flex flex-col">
            <AnmatCard />
          </div>
        </div>

        {/* CAPALIGLU full-width abajo */}
        <article
          className="mt-6 flex flex-col items-start p-6 sm:flex-row sm:items-center sm:gap-8"
          style={{ backgroundColor: "#fff", borderRadius: "8px" }}
        >
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
            <h3
              className="mb-2 text-sm font-semibold uppercase tracking-wide"
              style={{ color: "#5C0A14" }}
            >
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

        {/* Cómo es nuestro espacio — carrusel 3D */}
        <div className="mt-20">
          <h3
            className="mb-2 text-2xl font-semibold uppercase tracking-wide"
            style={{ color: "#5C0A14" }}
          >
            Cómo es nuestro espacio
          </h3>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed" style={{ color: "#7a5a5e" }}>
            Cuidar a quien confía en nosotros nos importa de verdad. Por eso
            armamos este espacio con amor, siguiendo las recomendaciones de
            Anahí, nuestra bromatóloga. Algunos clientes nos dijeron que
            parece un quirófano.
          </p>

          <Carousel3D slides={localSlides} slideWidth={300} slideHeight={400} />
        </div>
      </div>
    </section>
  );
}
