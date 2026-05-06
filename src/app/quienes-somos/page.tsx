import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { CertificateIcon, ChefHatIcon, HeartIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Quiénes Somos | Gustazo",
  description:
    "Conocé la historia de Gustazo: panadería y pastelería 100% sin gluten nacida en Córdoba desde la experiencia personal con la celiaquía.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>

        {/* HERO */}
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
              Gustazo · Córdoba, Argentina
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* SECCIÓN 1 — intro + foto pan */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                En <strong>Gustazo</strong> creemos que <strong>comer rico y seguro sin gluten</strong> no debería ser un privilegio. Somos un <strong>establecimiento elaborador certificado libre de gluten</strong>, con 9 productos registrados ante el RNPA, ubicados en Alta Córdoba.
              </p>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                Elaboramos panificados y dulces bajo estrictas <strong>Buenas Prácticas de Manufactura</strong>, con trazabilidad lote a lote y cero contaminación cruzada. No entra trigo a nuestro obrador. Nunca. R.N.E.: 04006318.
              </p>
              <blockquote
                className="border-l-4 pl-6 py-2 italic text-xl"
                style={{ borderColor: "#C9A227", color: "#5C0A14" }}
              >
                "Que nadie se quede afuera de la mesa."
              </blockquote>
            </div>

            <div
              className="relative flex aspect-square w-full items-center justify-center overflow-hidden"
              style={{ backgroundColor: "#5C0A14" }}
            >
              <Image
                src="/logo-gustazo.png"
                alt="Gustazo"
                fill
                className="object-contain p-14 opacity-20"
              />
            </div>
          </div>
        </section>

        <hr style={{ borderColor: "#e8dcc8", margin: "0 1.5rem" }} />

        {/* SECCIÓN 2 — historia con foto del obrador */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div
              className="relative flex aspect-video w-full items-center justify-center overflow-hidden order-last md:order-first"
              style={{ backgroundColor: "#faf6ee" }}
            >
              <Image
                src="/logo-gustazo.png"
                alt="Gustazo"
                fill
                className="object-contain p-12 opacity-10"
              />
            </div>

            <div>
              <h2
                className="mb-6 text-3xl font-semibold uppercase tracking-wide"
                style={{ color: "#5C0A14" }}
              >
                Una historia personal
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                <p>
                  Gustazo nació desde la <strong>experiencia de vida de uno de sus fundadores</strong>, diagnosticado con celiaquía a los 2 años. Esa vivencia marcó el camino: convertir la frustración de no poder comer "como todos" en una oportunidad para crear productos que <strong>devuelvan el placer de comer sin miedo</strong>.
                </p>
                <p>
                  Después de años de investigación, formación internacional —incluyendo un máster en España— y miles de horas en el obrador, Gustazo es hoy una panadería y pastelería <strong>100% libre de contaminación cruzada</strong>, que une <strong>ciencia, técnica y empatía</strong> en cada receta.
                </p>
                <p>
                  Sabemos lo que significa sentirse el diferente en la mesa. Y trabajamos todos los días para que eso cambie.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ borderColor: "#e8dcc8", margin: "0 1.5rem" }} />

        {/* SECCIÓN 3 — Por qué Gustazo */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2
            className="mb-10 text-2xl font-semibold uppercase tracking-widest"
            style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}
          >
            Por qué Gustazo
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                Icon: CertificateIcon,
                title: "Certificación real",
                text: "Elaborador nacional certificado libre de gluten. 9 productos con RNPA. R.N.E.: 04006318. No es un cartel: es una garantía formal.",
              },
              {
                Icon: ChefHatIcon,
                title: "Saber hacer de nivel europeo",
                text: "Formación internacional en panadería sin gluten. No copiamos recetas: entendemos la formulación desde la química.",
              },
              {
                Icon: HeartIcon,
                title: "Lo vivimos de adentro",
                text: "Nuestros fundadores son celíacos. Sabemos lo que sentís. Por eso no hacemos concesiones con la seguridad ni con el sabor.",
              },
            ].map((p) => (
              <div key={p.title} className="p-6" style={{ backgroundColor: "#faf6ee" }}>
                <p.Icon className="mb-3 h-8 w-8" style={{ color: "#5C0A14" } as React.CSSProperties} />
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

        <Footer />
      </main>
    </>
  );
}
