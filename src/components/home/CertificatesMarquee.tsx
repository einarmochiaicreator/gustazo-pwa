import Image from "next/image";

const CERT_COUNT = 9;
const CERTS = Array.from({ length: CERT_COUNT }, (_, i) => `/assets/certificados/rnpa-${i + 1}.png`);

export default function CertificatesMarquee() {
  return (
    <div
      className="rnpa-marquee-window relative overflow-hidden"
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        height: "260px",
        boxShadow: "0 4px 16px rgba(60,4,14,0.06)",
        // Fade en los bordes para que las imágenes "entren y salgan" suaves
        maskImage:
          "linear-gradient(to right, transparent 0, black 4%, black 96%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 4%, black 96%, transparent 100%)",
      }}
    >
      <div
        className="rnpa-marquee-track flex h-full items-center"
        style={{ width: "max-content", paddingTop: "20px", paddingBottom: "20px" }}
      >
        {[...CERTS, ...CERTS].map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 overflow-hidden transition hover:opacity-90"
            style={{
              width: "380px",
              height: "200px",
              marginRight: "24px",
              borderRadius: "8px",
              boxShadow: "0 6px 20px rgba(60,4,14,0.12)",
              backgroundColor: "#faf6ee",
            }}
            aria-label={`Ver certificado RNPA ${(i % CERT_COUNT) + 1} en tamaño completo`}
          >
            <Image
              src={src}
              alt={`Certificado RNPA ${(i % CERT_COUNT) + 1}`}
              fill
              className="object-cover"
              sizes="380px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
