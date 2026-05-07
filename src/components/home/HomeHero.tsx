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
        minHeight: "520px",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.45)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 pb-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-stretch">
          {/* Izquierda — sello SIN GLUTEN + título arriba, CTAs abajo */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              {/* Sello oficial SIN GLUTEN */}
              <div className="mb-6 relative h-20 w-20 md:h-24 md:w-24">
                <Image
                  src="/assets/logos/sin-gluten-logo.png"
                  alt="Apto sin gluten"
                  fill
                  className="object-contain"
                  sizes="96px"
                  priority
                />
              </div>

              <h1 className="leading-tight">
                <span
                  className="block text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl"
                  style={{ color: "#fff" }}
                >
                  Especialistas
                </span>
                <span
                  className="block mt-3 text-xl font-light tracking-wide md:text-2xl lg:text-3xl"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  en productos sin gluten.
                </span>
              </h1>
            </div>

            {/* CTAs alineados al final de la columna — coinciden con la base del logo Gustazo a la derecha */}
            <div className="flex flex-wrap gap-3">
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

          {/* Derecha — logo Gustazo en mostaza, anclado al fondo para alinear con los CTAs */}
          <div className="hidden md:flex items-end justify-center">
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
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
