import type { Metadata } from "next";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { PastaIcon, LeafIcon, FlaskIcon, WheatIcon, GearIcon, ChartIcon, CpuIcon, TimerIcon } from "@/components/Icons";

type IconComponent = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

export const metadata: Metadata = {
  title: "Talleres | Gustazo",
  description:
    "Talleres especializados de pastas sin gluten, psyllium, goma xántica, almidones, maquinaria, administración e inteligencia artificial para tu negocio.",
};

const WA_NUMBER = "5493516632462";

const TALLERES: { id: string; Icon: IconComponent; titulo: string; descripcion: string; duracion: string }[] = [
  {
    id: "pastas",
    Icon: PastaIcon,
    titulo: "Taller de pastas sin gluten",
    descripcion:
      "Dominá la elaboración de pastas frescas sin gluten: fideos, ravioles, ñoquis y más. Técnica, textura y sabor sin TACC.",
    duracion: "4 hs",
  },
  {
    id: "psyllium",
    Icon: LeafIcon,
    titulo: "Taller: Uso de psyllium",
    descripcion:
      "Entendé el rol del psyllium husk en las masas sin gluten: cómo dosificarlo, sus efectos en la textura y cómo reemplazarlo cuando hace falta.",
    duracion: "2 hs",
  },
  {
    id: "goma-xantica",
    Icon: FlaskIcon,
    titulo: "Taller: Uso de goma xántica",
    descripcion:
      "Conocé en profundidad la goma xántica: sus propiedades como agente ligante, sus límites y cómo combinarla con otras gomas.",
    duracion: "2 hs",
  },
  {
    id: "almidones",
    Icon: WheatIcon,
    titulo: "Taller: Uso de almidones",
    descripcion:
      "Explorá los distintos almidones (mandioca, maíz, arroz, papa) y sus diferencias en panificación, pastelería y pastas. Cuál usar y cuándo.",
    duracion: "3 hs",
  },
  {
    id: "maquinaria",
    Icon: GearIcon,
    titulo: "Taller: Uso de maquinaria",
    descripcion:
      "Operación y mantenimiento de las máquinas más usadas en la producción sin gluten: amasadoras, divisoras, laminadoras y más.",
    duracion: "3 hs",
  },
  {
    id: "administracion",
    Icon: ChartIcon,
    titulo: "Taller: Administración del negocio",
    descripcion:
      "Costos, fijación de precios, gestión de stock y rentabilidad aplicados al emprendimiento de alimentos sin gluten.",
    duracion: "3 hs",
  },
  {
    id: "inteligencia-artificial",
    Icon: CpuIcon,
    titulo: "Taller: IA aplicada al negocio",
    descripcion:
      "Cómo usar herramientas de inteligencia artificial para mejorar tu negocio: redacción, diseño, atención al cliente, marketing y automatización.",
    duracion: "2 hs",
  },
];

export default function TalleresPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>

        {/* HERO */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#5C0A14", minHeight: "260px" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.4)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1 className="text-5xl font-semibold uppercase leading-tight tracking-wide md:text-6xl" style={{ color: "#fff" }}>
              Talleres
            </h1>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Formaciones específicas y prácticas para profundizar en cada aspecto de la producción y el negocio sin gluten.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </section>

        {/* Grid de talleres */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TALLERES.map((taller) => {
              const waText = encodeURIComponent(
                `Hola Gustazo!\nMe interesa el taller: ${taller.titulo}\n¿Cuándo es la próxima fecha disponible?`
              );
              return (
                <div
                  key={taller.id}
                  className="flex flex-col"
                  style={{ border: "1px solid #e8dcc8" }}
                >
                  <div className="px-6 py-5" style={{ backgroundColor: "#faf6ee", borderBottom: "1px solid #e8dcc8" }}>
                    <taller.Icon className="mb-3 h-7 w-7" style={{ color: "#5C0A14" } as React.CSSProperties} />
                    <h2 className="text-base font-semibold uppercase tracking-wide leading-snug" style={{ color: "#5C0A14" }}>
                      {taller.titulo}
                    </h2>
                    <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: "#7a5a5e" }}>
                      <TimerIcon className="h-3.5 w-3.5 shrink-0" />{taller.duracion}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 px-6 py-5">
                    <p className="flex-1 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                      {taller.descripcion}
                    </p>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 text-center text-xs font-bold uppercase tracking-wide transition active:scale-[0.98]"
                      style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
                    >
                      Consultar fecha
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="p-8 text-center" style={{ backgroundColor: "#faf6ee", border: "1px solid #e8dcc8" }}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: "#5C0A14" }}>
              ¿Pedido especial o taller a medida?
            </p>
            <p className="mb-6 text-sm" style={{ color: "#7a5a5e" }}>
              Si buscás una formación específica que no está en la lista, contactanos y armamos algo para vos.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
