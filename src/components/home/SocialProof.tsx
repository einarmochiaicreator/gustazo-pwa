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
        <div className="mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Mensajes que recibimos
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
            {/* TODO: capturas reales en /assets/whatsapp/ */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="shrink-0"
                style={{
                  width: "260px",
                  aspectRatio: "9/16",
                  backgroundColor: "#faf6ee",
                  scrollSnapAlign: "start",
                }}
              >
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#5C0A14", opacity: 0.4 }}>
                    WhatsApp #{i}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrusel 2 — Google Maps reviews */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Reseñas en Google
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
            {/* TODO: capturas reales en /assets/google-reviews/ */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="shrink-0 p-5"
                style={{
                  width: "320px",
                  minHeight: "180px",
                  backgroundColor: "#faf6ee",
                  scrollSnapAlign: "start",
                }}
              >
                <div className="mb-2 flex gap-1" style={{ color: "#C9A227" }}>
                  {"★★★★★".split("").map((s, idx) => (
                    <span key={idx}>{s}</span>
                  ))}
                </div>
                <p className="text-xs italic" style={{ color: "#5C0A14", opacity: 0.5 }}>
                  Reseña Google #{i} — placeholder
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
