import Carousel3D, { type Carousel3DSlide } from "@/components/Carousel3D";

// TODO: capturas reales en /assets/whatsapp/
const WHATSAPP_PLACEHOLDERS = [1, 2, 3, 4, 5];

// TODO: capturas reales en /assets/google-reviews/
const GOOGLE_PLACEHOLDERS = [1, 2, 3, 4, 5];

const whatsappSlides: Carousel3DSlide[] = WHATSAPP_PLACEHOLDERS.map((i) => ({
  id: `wa-${i}`,
  content: (
    <div
      className="flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#faf6ee",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(60,4,14,0.15)",
      }}
    >
      <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#5C0A14", opacity: 0.4 }}>
        WhatsApp #{i}
      </span>
    </div>
  ),
}));

const googleSlides: Carousel3DSlide[] = GOOGLE_PLACEHOLDERS.map((i) => ({
  id: `g-${i}`,
  content: (
    <div
      className="flex h-full w-full flex-col p-6 overflow-hidden"
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(60,4,14,0.12)",
      }}
    >
      <div className="mb-3 flex gap-1" style={{ color: "#C9A227" }}>
        {"★★★★★".split("").map((s, idx) => (
          <span key={idx}>{s}</span>
        ))}
      </div>
      <p className="flex-1 text-sm italic" style={{ color: "#5C0A14", opacity: 0.4 }}>
        Reseña Google #{i} — placeholder
      </p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "#7a5a5e" }}>
        — Cliente Gustazo
      </p>
    </div>
  ),
}));

export default function SocialProof() {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#5C0A14" }}
        >
          Lo que nos dicen.
        </h2>

        {/* Carrusel 1 — WhatsApp */}
        <div className="mb-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Mensajes que recibimos
          </p>
          <Carousel3D slides={whatsappSlides} slideWidth={260} slideHeight={420} />
        </div>

        {/* Carrusel 2 — Google Maps reviews */}
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Reseñas en Google
          </p>
          <Carousel3D slides={googleSlides} slideWidth={320} slideHeight={220} />
        </div>
      </div>
    </section>
  );
}
