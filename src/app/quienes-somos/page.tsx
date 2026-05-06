import type { Metadata } from "next";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Quiénes Somos | Gustazo Gluten Free",
  description:
    "Somos un establecimiento elaborador certificado libre de gluten en Córdoba, Argentina. Conocé nuestra historia y misión.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Hero — mismo estilo que la tienda */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#5C0A14", minHeight: "220px" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.5)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-14 pb-20">
            <h1
              className="text-3xl font-semibold uppercase tracking-wide md:text-4xl"
              style={{ color: "#fff" }}
            >
              Quiénes somos
            </h1>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-10"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* Contenido */}
        <div className="mx-auto max-w-3xl px-6 py-14 space-y-16">

          {/* Intro + Misión */}
          <section>
            <p className="mb-6 text-base leading-relaxed" style={{ color: "#3a1a1e" }}>
              En <strong>Gustazo</strong> creemos que <strong>comer rico, saludable y sin gluten</strong> no debería ser un privilegio, sino un derecho. Somos un establecimiento <strong>elaborador certificado libre de gluten</strong> ubicado en Córdoba, Argentina, dedicado a transformar las limitaciones alimentarias en oportunidades para disfrutar y conectar con los demás.
            </p>
            <blockquote
              className="border-l-4 pl-6 py-2 italic text-lg"
              style={{ borderColor: "#C9A227", color: "#5C0A14" }}
            >
              "Que todos puedan disfrutar de una comida rica, segura y hecha con amor."
            </blockquote>
          </section>

          <Divider />

          {/* Cómo nace */}
          <section>
            <SectionHeading>Cómo nace Gustazo</SectionHeading>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3a1a1e" }}>
              <p>
                Gustazo nació desde la <strong>experiencia personal de uno de sus fundadores</strong>, diagnosticado con celiaquía a los 2 años. Esa vivencia marcó el camino: convertir la frustración de no poder comer "como todos" en una oportunidad para crear productos que <strong>devuelvan el placer de comer sin miedo</strong>.
              </p>
              <p>
                Después de años de investigación, formación y viajes en busca de las mejores técnicas de panadería sin gluten, nació un proyecto con alma: una panadería y pastelería <strong>100% libre de contaminación cruzada</strong>, que une <strong>ciencia, arte y empatía</strong> en cada receta.
              </p>
            </div>
          </section>

          <Divider />

          {/* Por qué */}
          <section>
            <SectionHeading>Por qué hacemos lo que hacemos</SectionHeading>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3a1a1e" }}>
              <p>
                Porque <strong>sabemos lo que significa sentirse limitado</strong> y queremos ser parte del cambio. Vendemos productos sin gluten y con ingredientes de alta calidad porque entendemos que la alimentación puede sanar, incluir y generar comunidad.
              </p>
              <p>
                Además, acompañamos a <strong>negocios gastronómicos y comercios</strong> ofreciendo opciones seguras y deliciosas para sus clientes.
              </p>
            </div>
          </section>

          <Divider />

          {/* Desde cuándo */}
          <section>
            <SectionHeading>Nuestra trayectoria</SectionHeading>
            <p className="text-base leading-relaxed" style={{ color: "#3a1a1e" }}>
              Hace varios años venimos perfeccionando nuestros procesos. En <strong>2020</strong> comenzamos oficialmente con la venta al público y hoy contamos con una <strong>línea completa de panificados y dulces congelados</strong>, elaborados bajo estrictas <strong>Buenas Prácticas de Manufactura (BPM)</strong> y con trazabilidad controlada. Nuestro objetivo sigue siendo el mismo que el primer día: que cada persona, celíaca o no, diga <em>"¡Qué gustazo comer así!"</em>
            </p>
          </section>

          <Divider />

          {/* Pilares / valores */}
          <section>
            <SectionHeading>Nuestros pilares</SectionHeading>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Pilar icon="🌾" title="100% sin gluten" text="Elaboración libre de contaminación cruzada. R.N.E.: 04006318." />
              <Pilar icon="🍞" title="Artesanal" text="Cada producto sale de nuestras manos y llega a tu mesa con cuidado y calidad." />
              <Pilar icon="🚚" title="Para todos" text="Retiro en local y envíos a todo el país. Córdoba y el resto del país incluidos." />
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-4">
            <a
              href="/"
              className="inline-block rounded px-8 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
            >
              Ver productos
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="py-10 text-center text-xs"
          style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}
        >
          <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Gustazo Gluten Free
          </p>
          <p className="mt-2 opacity-70">
            R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada
          </p>
          <p className="mt-1 opacity-70">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-5 text-xl font-semibold uppercase tracking-widest"
      style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.4rem" }}
    >
      {children}
    </h2>
  );
}

function Divider() {
  return <hr style={{ borderColor: "#e8dcc8" }} />;
}

function Pilar({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 p-5" style={{ backgroundColor: "#faf6ee" }}>
      <span className="text-3xl">{icon}</span>
      <p className="font-semibold uppercase text-sm tracking-wide" style={{ color: "#5C0A14" }}>
        {title}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#7a5a5e" }}>{text}</p>
    </div>
  );
}
