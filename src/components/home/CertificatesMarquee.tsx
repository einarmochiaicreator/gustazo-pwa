import Image from "next/image";

const CERT_COUNT = 9;
const CERTS = Array.from({ length: CERT_COUNT }, (_, i) => `/assets/certificados/rnpa-${i + 1}.png`);

/**
 * Marquee VERTICAL de los certificados RNPA. Las imágenes pasan continuamente
 * de abajo hacia arriba dentro de un recuadro fijo (efecto "ventana de tren").
 * Los bordes superior e inferior tienen un fade para que las cards entren y
 * salgan suaves. Pasar el mouse pausa la animación.
 */
export default function CertificatesMarquee() {
  return (
    <div
      className="rnpa-marquee-window relative h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#faf6ee",
        borderRadius: "8px",
        // Fade en arriba y abajo (entran y salen suaves)
        maskImage:
          "linear-gradient(to bottom, transparent 0, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className="rnpa-marquee-track flex flex-col"
        style={{ width: "100%", paddingTop: "12px", paddingBottom: "12px" }}
      >
        {[...CERTS, ...CERTS].map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block transition hover:opacity-95"
            style={{
              marginLeft: "12px",
              marginRight: "12px",
              marginBottom: "12px",
              aspectRatio: "1.85 / 1",
              borderRadius: "6px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(60,4,14,0.12)",
              backgroundColor: "#fff",
            }}
            aria-label={`Ver certificado RNPA ${(i % CERT_COUNT) + 1} en tamaño completo`}
          >
            <Image
              src={src}
              alt={`Certificado RNPA ${(i % CERT_COUNT) + 1}`}
              fill
              className="object-cover"
              sizes="320px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
