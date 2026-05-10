import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#5C0A14",
        backgroundImage: "url('/hero-gustazo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "640px",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.45)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 pb-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-stretch">
          {/* Izquierda — logo Gustazo (primer impacto) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-sm">
              <Image
                src="/assets/logos/gustazo-mostaza.png"
                alt="Gustazo"
                fill
                priority
                sizes="(max-width: 768px) 0px, 384px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Derecha — sello SIN GLUTEN arriba, texto + CTAs juntos abajo */}
          <div className="flex flex-col items-center text-center">
            {/* Sello oficial SIN GLUTEN — centrado */}
            <div className="relative h-44 w-44 md:h-52 md:w-52">
              <Image
                src="/assets/logos/sin-gluten-logo.png"
                alt="Apto sin gluten"
                fill
                priority
                sizes="(max-width: 768px) 176px, 208px"
                className="object-contain"
              />
            </div>

            {/* Empuja el bloque inferior hacia el fondo */}
            <div className="flex-1 min-h-8" />

            {/* Headline cerca de los CTAs, alineado horizontalmente con el sello */}
            <h1 className="leading-tight">
              <span
                className="block text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl"
                style={{ color: "#fff" }}
              >
                Especialistas
              </span>
              <span
                className="block mt-2 text-xl font-light tracking-wide md:text-2xl lg:text-3xl"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                en productos sin gluten.
              </span>
            </h1>

            {/* Margen prudente entre texto y CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/tienda"
                className="px-7 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
                style={{ backgroundColor: "#C9A227", color: "#5C0A14", borderRadius: "8px" }}
              >
                Ver productos →
              </Link>
              <Link
                href="/quienes-somos"
                className="px-7 py-3 text-sm font-semibold uppercase tracking-wide border transition active:scale-95"
                style={{ borderColor: "rgba(255,255,255,0.7)", color: "#fff", borderRadius: "8px" }}
              >
                Conocernos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
