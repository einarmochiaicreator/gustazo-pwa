import Image from "next/image";

const CERT_COUNT = 9;
const CERTS = Array.from({ length: CERT_COUNT }, (_, i) => `/assets/certificados/rnpa-${i + 1}.png`);

/**
 * Marquee VERTICAL de los certificados RNPA. La ventana tiene la misma forma
 * (A4 portrait) que el rectángulo del RNE. Cada certificado se muestra
 * completo dentro de un slide del tamaño total de la ventana, deslizándose
 * lentamente de abajo hacia arriba. Pasa al siguiente cuando el actual sale
 * por arriba. Pausa al hover.
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
        className="rnpa-marquee-track flex flex-col"
        style={{ width: "100%" }}
      >
        {[...CERTS, ...CERTS].map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full shrink-0 transition hover:opacity-95"
            style={{
              aspectRatio: "1 / 1.414",
              padding: "16px",
            }}
            aria-label={`Ver certificado RNPA ${(i % CERT_COUNT) + 1} en tamaño completo`}
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`Certificado RNPA ${(i % CERT_COUNT) + 1}`}
                fill
                className="object-contain"
                sizes="280px"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
