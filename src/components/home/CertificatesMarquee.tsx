import Image from "next/image";

// Cada certificado RNPA tiene su propio aspect ratio (las imágenes fuente
// tienen dimensiones distintas). Cada slide se renderiza con el aspect
// exacto de su imagen para que entre perfecta, sin recorte ni whitespace.
const CERTS = [
  { src: "/assets/certificados/rnpa-1.png", w: 1552, h: 930 },
  { src: "/assets/certificados/rnpa-2.png", w: 1534, h: 782 },
  { src: "/assets/certificados/rnpa-3.png", w: 1568, h: 786 },
  { src: "/assets/certificados/rnpa-4.png", w: 1576, h: 770 },
  { src: "/assets/certificados/rnpa-5.png", w: 1526, h: 766 },
  { src: "/assets/certificados/rnpa-6.png", w: 1560, h: 906 },
  { src: "/assets/certificados/rnpa-7.png", w: 1586, h: 902 },
  { src: "/assets/certificados/rnpa-8.png", w: 1574, h: 912 },
  { src: "/assets/certificados/rnpa-9.png", w: 1558, h: 908 },
];

/**
 * Marquee VERTICAL de certificados RNPA. Cada slide tiene el aspect ratio
 * exacto de su imagen fuente, así que entra completa sin recorte. Stack
 * apretado, varios visibles a la vez, deslizándose continuamente. Pausa al
 * hover.
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
        {[...CERTS, ...CERTS].map((cert, i) => (
          <a
            key={i}
            href={cert.src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full shrink-0 transition hover:opacity-95"
            style={{
              aspectRatio: `${cert.w} / ${cert.h}`,
              marginBottom: "6px",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(60,4,14,0.08)",
              backgroundColor: "#fff",
            }}
            aria-label={`Ver certificado RNPA ${(i % CERTS.length) + 1} en tamaño completo`}
          >
            <Image
              src={cert.src}
              alt={`Certificado RNPA ${(i % CERTS.length) + 1}`}
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
