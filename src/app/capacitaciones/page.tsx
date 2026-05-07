import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import {
  TimerIcon,
  TargetIcon,
  CheckIcon,
  CalendarIcon,
  PastaIcon,
  LeafIcon,
  FlaskIcon,
  WheatIcon,
  GearIcon,
  ChartIcon,
  CpuIcon,
} from "@/components/Icons";

type IconComponent = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

export const metadata: Metadata = {
  title: "Capacitaciones | Gustazo",
  description:
    "Cursos y talleres de panadería sin gluten en Gustazo. Para celíacos que quieren cocinarse bien, emprendedores, dueños de negocios y niños.",
};

const WA_NUMBER = "5493516632462";

const CURSOS = [
  {
    id: "formulacion-presencial",
    modalidad: "Presencial",
    titulo: "Formulación sin gluten",
    descripcion:
      "Aprendé a crear tus propias recetas de panadería y pastelería sin gluten desde cero. Entendemos los ingredientes funcionales, sus roles y cómo combinarlos para lograr productos de calidad profesional.",
    duracion: "8 hs (2 encuentros)",
    nivel: "Principiante / Intermedio",
    incluye: ["Material teórico impreso", "Práctica en establecimiento", "Degustación", "Certificado de participación"],
    proximaFecha: "Consultá disponibilidad",
  },
  {
    id: "formulacion-online",
    modalidad: "Online",
    titulo: "Formulación sin gluten",
    descripcion:
      "La misma formación de nuestro curso presencial, adaptada al formato virtual con clases en vivo, material descargable y acceso a grabaciones. Aprendés a tu ritmo con soporte del equipo.",
    duracion: "6 hs (3 clases de 2 hs)",
    nivel: "Principiante / Intermedio",
    incluye: ["Material teórico digital", "Grabaciones por 30 días", "Grupo de consultas", "Certificado"],
    proximaFecha: "Consultá disponibilidad",
  },
  {
    id: "cocina-ninos-presencial",
    modalidad: "Presencial",
    titulo: "Cocina para niños",
    descripcion:
      "Un espacio divertido y seguro para que los más chicos aprendan a cocinar sin gluten. Recetas simples, manos en la masa, y la experiencia de crear algo propio para compartir con la familia.",
    duracion: "3 hs",
    nivel: "Niños de 5 a 12 años",
    incluye: ["Recetario para llevar a casa", "Snack sin gluten", "Diploma de chef"],
    proximaFecha: "Consultá disponibilidad",
  },
  {
    id: "cocina-ninos-online",
    modalidad: "Online",
    titulo: "Cocina para niños",
    descripcion:
      "Clase virtual interactiva donde los niños cocinan junto a un instructor desde casa. Enviamos la guía de ingredientes con anticipación para que todo esté listo al momento de arrancar.",
    duracion: "2 hs",
    nivel: "Niños de 5 a 12 años",
    incluye: ["Lista de ingredientes previa", "Grabación de la clase", "Diploma digital"],
    proximaFecha: "Consultá disponibilidad",
  },
];

const TALLERES: { id: string; Icon: IconComponent; titulo: string; descripcion: string; duracion: string }[] = [
  {
    id: "pastas",
    Icon: PastaIcon,
    titulo: "Pastas sin gluten",
    descripcion:
      "Dominá la elaboración de pastas frescas sin gluten: fideos, ravioles, ñoquis y más. Técnica, textura y sabor.",
    duracion: "4 hs",
  },
  {
    id: "psyllium",
    Icon: LeafIcon,
    titulo: "Uso de psyllium",
    descripcion:
      "Entendé el rol del psyllium husk en las masas sin gluten: cómo dosificarlo, sus efectos en la textura y cómo reemplazarlo cuando hace falta.",
    duracion: "2 hs",
  },
  {
    id: "goma-xantica",
    Icon: FlaskIcon,
    titulo: "Uso de goma xántica",
    descripcion:
      "Conocé en profundidad la goma xántica: sus propiedades como agente ligante, sus límites y cómo combinarla con otras gomas.",
    duracion: "2 hs",
  },
  {
    id: "almidones",
    Icon: WheatIcon,
    titulo: "Uso de almidones",
    descripcion:
      "Explorá los distintos almidones (mandioca, maíz, arroz, papa) y sus diferencias en panificación, pastelería y pastas. Cuál usar y cuándo.",
    duracion: "3 hs",
  },
  {
    id: "maquinaria",
    Icon: GearIcon,
    titulo: "Uso de maquinaria",
    descripcion:
      "Operación y mantenimiento de las máquinas más usadas en la producción sin gluten: amasadoras, divisoras, laminadoras y más.",
    duracion: "3 hs",
  },
  {
    id: "administracion",
    Icon: ChartIcon,
    titulo: "Administración del negocio",
    descripcion:
      "Costos, fijación de precios, gestión de stock y rentabilidad aplicados al emprendimiento de alimentos sin gluten.",
    duracion: "3 hs",
  },
  {
    id: "inteligencia-artificial",
    Icon: CpuIcon,
    titulo: "IA aplicada al negocio",
    descripcion:
      "Cómo usar herramientas de inteligencia artificial para mejorar tu negocio: redacción, diseño, atención al cliente, marketing y automatización.",
    duracion: "2 hs",
  },
];

const MODALIDAD_STYLE: Record<string, { bg: string; color: string }> = {
  Presencial: { bg: "#5C0A14", color: "#C9A227" },
  Online: { bg: "#C9A227", color: "#5C0A14" },
};

export default function CapacitacionesPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#5C0A14", minHeight: "260px" }}>
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1 className="text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl" style={{ color: "#fff" }}>
              Capacitaciones
            </h1>
            <p className="mt-3 text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Cursos y talleres de panadería sin gluten.<br />
              Para quienes quieren aprender de quienes lo viven desde adentro.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* Para quién */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Para quién
          </p>
          <h2
            className="mb-8 text-2xl font-semibold uppercase tracking-wide md:text-3xl"
            style={{ color: "#5C0A14" }}
          >
            ¿Esto es para vos?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              "Celíacos que quieren aprender a cocinarse bien.",
              "Emprendedores que están armando su negocio sin gluten.",
              "Dueños de panaderías y restaurantes que quieren mejorar la calidad de sus productos.",
              "Niños que quieren aprender a cocinar.",
            ].map((p) => (
              <p key={p} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                <CheckIcon className="mt-1 h-4 w-4 shrink-0" style={{ color: "#C9A227" }} />
                <span>{p}</span>
              </p>
            ))}
          </div>
        </section>

        {/* CREAR sin gluten */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-14">
              <div className="shrink-0">
                <div className="relative h-40 w-40">
                  <Image src="/logo-crear.png" alt="CREAR sin gluten" fill className="object-contain" />
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
                  Nuestro programa principal
                </p>
                <h2 className="mb-3 text-2xl font-semibold uppercase tracking-wide md:text-3xl" style={{ color: "#5C0A14" }}>
                  CREAR sin gluten
                </h2>
                <p className="mb-4 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                  Nuestro programa de formación ya tiene <strong>2 ediciones sold out</strong>.
                  Está pensado para celíacos que quieren hacer sus propios productos, y para
                  panaderos y emprendedores que quieren entrar al mercado sin gluten con
                  fundamento real.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5a5e" }}>
                  No enseñamos recetas para copiar. Enseñamos a entender los ingredientes
                  funcionales, sus roles y cómo formular desde cero, con el criterio
                  técnico que sólo da la experiencia de años en el establecimiento y la
                  formación internacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CURSOS */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Cursos
          </p>
          <h2
            className="mb-10 text-2xl font-semibold uppercase tracking-wide md:text-3xl"
            style={{ color: "#5C0A14" }}
          >
            Formación completa.
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {CURSOS.map((curso) => {
              const style = MODALIDAD_STYLE[curso.modalidad];
              const waText = encodeURIComponent(
                `Hola Gustazo!\nMe interesa anotarme al curso: ${curso.titulo} (${curso.modalidad})\n¿Cuándo es la próxima fecha disponible?`
              );
              return (
                <div key={curso.id} className="flex flex-col" style={{ border: "1px solid #e8dcc8" }}>
                  <div className="px-6 py-5" style={{ backgroundColor: "#faf6ee", borderBottom: "1px solid #e8dcc8" }}>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
                        {curso.titulo}
                      </h3>
                      <span
                        className="shrink-0 rounded px-2.5 py-1 text-xs font-bold uppercase tracking-wide"
                        style={{ backgroundColor: style.bg, color: style.color }}
                      >
                        {curso.modalidad}
                      </span>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs" style={{ color: "#7a5a5e" }}>
                      <span className="flex items-center gap-1"><TimerIcon className="h-3.5 w-3.5" />{curso.duracion}</span>
                      <span className="flex items-center gap-1"><TargetIcon className="h-3.5 w-3.5" />{curso.nivel}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 px-6 py-5">
                    <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>{curso.descripcion}</p>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Incluye</p>
                      <ul className="space-y-1">
                        {curso.incluye.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#1a0a0c" }}>
                            <CheckIcon className="h-3.5 w-3.5 shrink-0" style={{ color: "#C9A227" }} /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-2">
                      <p className="mb-3 flex items-center gap-1 text-xs" style={{ color: "#7a5a5e" }}>
                        <CalendarIcon className="h-3.5 w-3.5 shrink-0" />{curso.proximaFecha}
                      </p>
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 text-center text-sm font-bold uppercase tracking-wide transition active:scale-[0.98]"
                        style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "8px" }}
                      >
                        Me interesa — consultar
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TALLERES */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Talleres
            </p>
            <h2
              className="mb-10 text-2xl font-semibold uppercase tracking-wide md:text-3xl"
              style={{ color: "#5C0A14" }}
            >
              Específicos y prácticos.
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TALLERES.map((taller) => {
                const waText = encodeURIComponent(
                  `Hola Gustazo!\nMe interesa el taller: ${taller.titulo}\n¿Cuándo es la próxima fecha disponible?`
                );
                return (
                  <div key={taller.id} className="flex flex-col" style={{ backgroundColor: "#fff", border: "1px solid #e8dcc8" }}>
                    <div className="px-6 py-5" style={{ borderBottom: "1px solid #e8dcc8" }}>
                      <taller.Icon className="mb-3 h-7 w-7" style={{ color: "#5C0A14" }} />
                      <h3 className="text-base font-semibold uppercase tracking-wide leading-snug" style={{ color: "#5C0A14" }}>
                        {taller.titulo}
                      </h3>
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
                        style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "8px" }}
                      >
                        Consultar fecha
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="p-8 text-center" style={{ backgroundColor: "#5C0A14", color: "#fff" }}>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              ¿Capacitación a medida?
            </p>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              Si buscás algo que no está en la lista, o querés una formación
              para tu grupo, empresa o equipo, escribinos.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#C9A227", color: "#5C0A14", borderRadius: "8px" }}
            >
              Contactarnos →
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
