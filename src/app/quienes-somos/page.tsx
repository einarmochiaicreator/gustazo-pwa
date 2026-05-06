import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Quiénes Somos | Gustazo Gluten Free",
  description:
    "Conocé la historia de Gustazo: una panadería y pastelería 100% sin gluten nacida en Córdoba desde la experiencia personal con la celiaquía.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>

        {/* HERO — bordo + corte diagonal */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#5C0A14", minHeight: "260px" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.4)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1
              className="text-5xl font-semibold uppercase leading-tight tracking-wide md:text-6xl"
              style={{ color: "#fff" }}
            >
              Quiénes somos
            </h1>
            <p className="mt-3 text-lg font-medium uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Gustazo Gluten Free
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* SECCIÓN 1 — intro + misión (texto izq / imagen der) */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Texto */}
            <div>
              <p className="mb-6 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                En <strong>Gustazo</strong> creemos que <strong>comer rico, saludable y sin gluten</strong> no debería ser un privilegio, sino un derecho. Somos un establecimiento <strong>elaborador certificado libre de gluten</strong> ubicado en Córdoba, Argentina, dedicado a transformar las limitaciones alimentarias en oportunidades para disfrutar y conectar con los demás.
              </p>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                Desde 2020 elaboramos panificados y dulces congelados bajo estrictas <strong>Buenas Prácticas de Manufactura (BPM)</strong>, con trazabilidad controlada y cero contaminación cruzada. R.N.E.: 04006318.
              </p>
              <blockquote
                className="border-l-4 pl-6 py-2 italic text-xl"
                style={{ borderColor: "#C9A227", color: "#5C0A14" }}
              >
                "Que todos puedan disfrutar de una comida rica, segura y hecha con amor."
              </blockquote>
            </div>

            {/* Imagen / placeholder */}
            <div
              className="relative flex aspect-square w-full items-center justify-center overflow-hidden"
              style={{ backgroundColor: "#5C0A14" }}
            >
              <Image
                src="/logo-gustazo.png"
                alt="Gustazo Gluten Free"
                fill
                className="object-contain p-12 opacity-30"
              />
              {/* Swap por una foto real: <Image src="/foto-gustazo.jpg" fill className="object-cover" /> */}
            </div>
          </div>
        </section>

        <hr style={{ borderColor: "#e8dcc8", margin: "0 1.5rem" }} />

        {/* SECCIÓN 2 — historia (imagen izq / texto der) */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Imagen */}
            <div
              className="relative flex aspect-video w-full items-center justify-center overflow-hidden order-last md:order-first"
              style={{ backgroundColor: "#faf6ee" }}
            >
              <span className="text-8xl opacity-60">🍞</span>
              {/* Swap por una foto real: <Image src="/foto-obrador.jpg" fill className="object-cover" /> */}
            </div>

            {/* Texto */}
            <div>
              <h2
                className="mb-6 text-3xl font-semibold uppercase tracking-wide"
                style={{ color: "#5C0A14" }}
              >
                Gustazo como proyecto
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                <p>
                  Gustazo nació desde la <strong>experiencia personal de uno de sus fundadores</strong>, diagnosticado con celiaquía a los 2 años. Esa vivencia marcó el camino: convertir la frustración de no poder comer "como todos" en una oportunidad para crear productos que <strong>devuelvan el placer de comer sin miedo</strong>.
                </p>
                <p>
                  Después de años de investigación, formación y viajes en busca de las mejores técnicas de panadería sin gluten, nació un proyecto con alma: una panadería y pastelería <strong>100% libre de contaminación cruzada</strong>, que une <strong>ciencia, arte y empatía</strong> en cada receta.
                </p>
                <p>
                  Porque <strong>sabemos lo que significa sentirse limitado</strong> y queremos ser parte del cambio. Que cada persona, celíaca o no, diga <em>"¡Qué gustazo comer así!"</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ borderColor: "#e8dcc8", margin: "0 1.5rem" }} />

        {/* SECCIÓN 3 — Pilares */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2
            className="mb-10 text-2xl font-semibold uppercase tracking-widest"
            style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}
          >
            Nuestros pilares
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: "🌾", title: "100% sin gluten", text: "Establecimiento elaborador certificado. R.N.E.: 04006318. Cero contaminación cruzada." },
              { icon: "🍞", title: "Artesanal", text: "Elaboramos bajo Buenas Prácticas de Manufactura con trazabilidad controlada en cada lote." },
              { icon: "🚚", title: "Para todos", text: "Retiro en local en Alta Córdoba y envíos a todo el país. Atención por WhatsApp todos los días." },
            ].map((p) => (
              <div key={p.title} className="p-6" style={{ backgroundColor: "#faf6ee" }}>
                <span className="mb-3 block text-4xl">{p.icon}</span>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>{p.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5a5e" }}>{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-block px-10 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
            >
              Ver productos
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs" style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}>
          <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>Gustazo Gluten Free</p>
          <p className="mt-2 opacity-70">R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada</p>
          <p className="mt-1 opacity-70">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}
