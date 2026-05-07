import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import ValuesGrid from "@/components/quienes-somos/ValuesGrid";

export const metadata: Metadata = {
  title: "Quiénes Somos | Gustazo",
  description:
    "Conocé la historia de Gustazo: especialistas en productos para celíacos, nacidos en Córdoba desde la experiencia personal con la celiaquía.",
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
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1
              className="text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl"
              style={{ color: "#fff" }}
            >
              Quiénes somos
            </h1>
            <p className="mt-3 text-base font-medium uppercase tracking-widest md:text-lg" style={{ color: "#C9A227" }}>
              Hace más de 30 años que vivimos con celiaquía. Esto es lo que aprendimos.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* HISTORIA */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2
            className="mb-8 text-2xl font-semibold uppercase tracking-widest"
            style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}
          >
            Nuestra historia
          </h2>

          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
            <p>
              Gustazo es una respuesta a una realidad que conocemos muy de cerca:
              uno de los creadores ha padecido la enfermedad desde los 2 años.
              Esta experiencia personal marcó el camino de nuestra misión —
              transformar las limitaciones alimentarias en oportunidades para
              disfrutar y conectar con los demás.
            </p>
            <p>
              Durante años vivimos las frustraciones que enfrentan las personas
              con restricciones alimentarias: la falta de opciones, el aislamiento
              social, y la dificultad de encontrar alimentos realmente deliciosos
              y seguros. Fue esa vivencia, combinada con nuestra pasión por la
              panadería, lo que nos impulsó a crear Gustazo.
            </p>
            <p>
              Desde el principio entendimos que esto no era solo sobre hacer
              productos ricos: era sobre conectar profundamente con las
              necesidades de las personas y evolucionar constantemente para
              satisfacerlas. Nos formamos con los mejores panaderos, viajamos
              por el mundo investigando, buscando respuestas, capacitándonos
              en lo último de la panadería internacional sin gluten. Estas
              experiencias nos han permitido ofrecer productos que no solo son
              seguros, sino también deliciosos, innovadores y hechos con el
              propósito de incluir a todos en la mesa.
            </p>
            <p>
              Hoy Gustazo no se detiene en el gluten. Soñamos con un futuro en
              el que podamos ofrecer productos libres de alérgenos que sean
              nutritivos y sabrosos para todos, sin excepción.
            </p>
            <p>
              Queremos contribuir a un mundo más saludable e inclusivo, donde
              cada bocado sea una oportunidad para disfrutar, compartir y ser
              parte de algo más grande.
            </p>
          </div>
        </section>

        {/* MISIÓN + VISIÓN */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
                  Misión
                </p>
                <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "#5C0A14" }}>
                  Contribuir para que todos puedan disfrutar de experiencias
                  ricas y saludables.
                </p>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
                  Visión
                </p>
                <p className="text-base leading-relaxed md:text-lg" style={{ color: "#1a0a0c" }}>
                  Transformar las limitaciones alimentarias en oportunidades
                  para disfrutar y conectar con los demás, elevando la
                  conciencia de que comer bien es posible y es la base para
                  vivir plenamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Lo que nos guía
          </p>
          <h2
            className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Nuestros valores
          </h2>

          <ValuesGrid />
        </section>

        {/* CIERRE + CTA */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "#5C0A14" }}>
            Estamos acá para hacer la diferencia, no solo en el mercado, sino
            en las vidas de las personas. Gustazo es más que una marca —
            es un movimiento hacia un futuro donde la comida sea un puente
            que une, no una barrera que separa.
          </p>

          <Link
            href="/tienda"
            className="mt-10 inline-block px-10 py-4 text-sm font-bold uppercase tracking-wide transition active:scale-95"
            style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
          >
            Ver productos →
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
