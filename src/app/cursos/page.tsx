import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos | Gustazo",
  description:
    "Cursos presenciales y online de formulación sin gluten y cocina para niños. CREAR sin gluten — la formación de Gustazo con 2 ediciones sold out.",
};

const WA_NUMBER = "5493516632462";

const CURSOS = [
  {
    id: "formulacion-presencial",
    modalidad: "Presencial",
    titulo: "Formulación sin gluten",
    descripcion:
      "Aprendé a crear tus propias recetas de panadería y pastelería sin TACC desde cero. Entendemos los ingredientes funcionales, sus roles y cómo combinarlos para lograr productos de calidad profesional.",
    duracion: "8 hs (2 encuentros)",
    nivel: "Principiante / Intermedio",
    incluye: ["Material teórico impreso", "Práctica en obrador", "Degustación", "Certificado de participación"],
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

const MODALIDAD_STYLE: Record<string, { bg: string; color: string }> = {
  Presencial: { bg: "#5C0A14", color: "#C9A227" },
  Online: { bg: "#C9A227", color: "#5C0A14" },
};

export default function CursosPage() {
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
              Cursos
            </h1>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Formación presencial y online en formulación sin gluten y cocina para niños.<br />
              Aprendé de quienes viven el mundo celíaco desde adentro.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </section>

        {/* CREAR sin gluten — identidad del programa */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-14">
            <div className="shrink-0">
              <div className="relative h-40 w-40">
                <Image src="/logo-crear.png" alt="CREAR sin gluten" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
                CREAR sin gluten
              </h2>
              <p className="mb-4 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                Nuestro programa de formación ya tiene <strong>2 ediciones sold out</strong>. Está pensado para celíacos que quieren aprender a hacer sus propios productos, y para panaderos y emprendedores que quieren entrar al mercado sin gluten con fundamento real.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#7a5a5e" }}>
                No enseñamos recetas para copiar. Enseñamos a entender los ingredientes funcionales, sus roles y cómo formular desde cero, con el criterio técnico que sólo da la experiencia de años en el obrador y formación internacional.
              </p>
            </div>
          </div>
        </section>

        <hr style={{ borderColor: "#e8dcc8", margin: "0 1.5rem" }} />

        {/* Grid de cursos */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-8 text-2xl font-semibold uppercase tracking-widest"
            style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}>
            Oferta de cursos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {CURSOS.map((curso) => {
              const style = MODALIDAD_STYLE[curso.modalidad];
              const waText = encodeURIComponent(
                `Hola Gustazo! 👋\nMe interesa anotarme al curso: ${curso.titulo} (${curso.modalidad})\n¿Cuándo es la próxima fecha disponible?`
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
                      <span>⏱ {curso.duracion}</span>
                      <span>🎯 {curso.nivel}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 px-6 py-5">
                    <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>{curso.descripcion}</p>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Incluye</p>
                      <ul className="space-y-1">
                        {curso.incluye.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#1a0a0c" }}>
                            <span style={{ color: "#C9A227" }}>✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-2">
                      <p className="mb-3 text-xs" style={{ color: "#7a5a5e" }}>📅 {curso.proximaFecha}</p>
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 text-center text-sm font-bold uppercase tracking-wide transition active:scale-[0.98]"
                        style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
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

        {/* CTA capacitación grupal */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="p-8 text-center" style={{ backgroundColor: "#faf6ee", border: "1px solid #e8dcc8" }}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: "#5C0A14" }}>
              ¿Capacitación para tu grupo o empresa?
            </p>
            <p className="mb-6 text-sm" style={{ color: "#7a5a5e" }}>
              Armamos formaciones a medida para grupos de profesionales, escuelas de gastronomía, almacenes naturistas y emprendedores del sector alimenticio.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
            >
              Contactarnos
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs" style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}>
          <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>Gustazo</p>
          <p className="mt-2 opacity-70">R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada</p>
          <p className="mt-1 opacity-70">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}
