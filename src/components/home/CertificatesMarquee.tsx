import Image from "next/image";

const CERT_COUNT = 9;
const CERTS = Array.from({ length: CERT_COUNT }, (_, i) => `/assets/certificados/rnpa-${i + 1}.png`);

/**
 * Marquee horizontal de los certificados RNPA. Cada certificado ocupa el
 * ancho completo de la ventana (vía container queries: 100cqw), de modo que
 * solo se ve UN certificado a la vez deslizándose. Cuando uno sale por la
 * izquierda, el siguiente entra por la derecha. Pausa al hover.
 */
export default function CertificatesMarquee() {
  return (
    <div
      className="rnpa-marquee-window relative h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#faf6ee",
        borderRadius: "8px",
      }}
    >
      <div
        className="rnpa-marquee-track flex h-full"
        style={{ width: "max-content" }}
      >
        {[...CERTS, ...CERTS].map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="rnpa-marquee-slide relative block h-full shrink-0 transition hover:opacity-95"
            aria-label={`Ver certificado RNPA ${(i % CERT_COUNT) + 1} en tamaño completo`}
          >
            <Image
              src={src}
              alt={`Certificado RNPA ${(i % CERT_COUNT) + 1}`}
              fill
              className="object-cover"
              sizes="500px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
