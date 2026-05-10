import Image from "next/image";

const CERT_COUNT = 9;
const CERTS = Array.from({ length: CERT_COUNT }, (_, i) => `/assets/certificados/rnpa-${i + 1}.png`);

// Las imágenes de RNPA son landscape ~1.67:1.
const SLIDE_ASPECT = "1.669 / 1";

/**
 * Marquee VERTICAL de certificados RNPA. Cada slide tiene la misma forma que
 * la imagen del certificado (landscape ~1.67:1), apilados verticalmente con
 * un margen mínimo entre uno y otro. La ventana es A4 portrait, así que se
 * ven varias imágenes a la vez (~2-3) deslizándose lentamente. Pausa al hover.
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
        style={{ width: "100%", padding: "6px" }}
      >
        {[...CERTS, ...CERTS].map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full shrink-0 transition hover:opacity-95"
            style={{
              aspectRatio: SLIDE_ASPECT,
              marginBottom: "6px",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(60,4,14,0.08)",
              backgroundColor: "#fff",
            }}
            aria-label={`Ver certificado RNPA ${(i % CERT_COUNT) + 1} en tamaño completo`}
          >
            <Image
              src={src}
              alt={`Certificado RNPA ${(i % CERT_COUNT) + 1}`}
              fill
              className="object-cover"
              sizes="280px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
