import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { CheckIcon, WhatsAppIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Mayoristas | Gustazo",
  description:
    "Productos sin gluten para cafés, dietéticas, restaurantes y kioscos. Agendá una llamada con nosotros y armamos una propuesta a tu medida.",
};

const WA_NUMBER = "5493516632462";
const EMAIL = "glutenfree.gustazo@gmail.com";

const WA_TEXT = encodeURIComponent(
  "Hola Gustazo! Tengo un negocio y quiero agendar una llamada para ver cómo podemos trabajar juntos. Te cuento brevemente:\n\n" +
  "· Qué tipo de negocio tengo:\n" +
  "· Qué problema o necesidad tengo con los productos sin gluten:\n" +
  "· Mejor horario para hablar:"
);

const EMAIL_SUBJECT = encodeURIComponent("Quiero agendar una llamada — Mayorista");
const EMAIL_BODY = encodeURIComponent(
  "Hola Gustazo!\n\n" +
  "Tengo un negocio y quiero agendar una llamada para ver cómo podemos trabajar juntos.\n\n" +
  "Tipo de negocio:\n" +
  "Necesidad puntual:\n" +
  "Mejor horario para hablar:\n\n" +
  "Gracias!"
);

export default function MayoristasPage() {
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
              Mayoristas
            </h1>
            <p className="mt-3 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Para cafés, dietéticas, restaurantes, kioscos y revendedores.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* AGENDÁ UNA LLAMADA — sección principal */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-4xl px-6 py-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Antes de pasarte una lista de precios
            </p>
            <h2
              className="mb-6 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
              style={{ color: "#5C0A14" }}
            >
              Queremos escucharte primero.
            </h2>

            <p className="mb-4 text-base leading-relaxed md:text-lg" style={{ color: "#1a0a0c" }}>
              Cada negocio es distinto. Antes de venderte nada, queremos
              entender qué vendés, qué te falta, qué clientes querés atender
              y qué problemas estás teniendo con lo que hay hoy en el mercado.
            </p>

            <p className="mb-10 text-base leading-relaxed md:text-lg" style={{ color: "#1a0a0c" }}>
              Después armamos una propuesta a tu medida — productos,
              volúmenes, precios, soluciones de contaminación cruzada y
              capacitación para tu equipo si hace falta.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wide transition active:scale-95"
                style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "8px" }}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar por WhatsApp
              </a>

              <a
                href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wide border-2 transition active:scale-95"
                style={{ borderColor: "#5C0A14", color: "#5C0A14", borderRadius: "8px" }}
              >
                <MailIcon className="h-5 w-5" />
                Agendar por email
              </a>
            </div>

            <p className="mt-6 text-xs italic" style={{ color: "#7a5a5e" }}>
              Te respondemos en menos de 24 horas hábiles.
            </p>
          </div>
        </section>

        {/* Qué armamos juntos */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Qué armamos juntos
          </p>
          <h2
            className="mb-12 text-2xl font-semibold uppercase tracking-wide md:text-3xl"
            style={{ color: "#5C0A14" }}
          >
            Una solución completa para tu negocio.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Esquema de descuentos por volumen",
                text: "Mientras más pedís, mejor el precio. Todo claro, sin condiciones raras.",
              },
              {
                title: "Soluciones contra contaminación cruzada",
                text: "Te asesoramos sobre cómo manipular los productos en tu cocina sin que se contaminen, para que tus clientes celíacos confíen.",
              },
              {
                title: "Productos pensados para B2B",
                text: "Pan de hamburguesa, pan de lomo y prepizza son los que más nos piden cafés y restaurantes. Calidad consistente lote a lote.",
              },
              {
                title: "Capacitación para tu equipo",
                text: "Si hace falta, vamos a tu negocio o tu equipo viene al nuestro y les explicamos todo lo que tienen que saber sobre sin gluten.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-6"
                style={{ backgroundColor: "#faf6ee", borderRadius: "8px" }}
              >
                <p className="mb-3 flex items-start gap-2 text-base font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0" style={{ color: "#C9A227" }} />
                  <span>{p.title}</span>
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final — repite la llamada */}
        <section style={{ backgroundColor: "#5C0A14", color: "#fff" }}>
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              ¿Lo charlamos?
            </p>
            <h2
              className="mb-6 text-2xl font-semibold uppercase tracking-wide md:text-3xl"
              style={{ color: "#fff" }}
            >
              No te vendemos nada que no tenga sentido para tu negocio.
            </h2>
            <p className="mb-10 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Una llamada de 15 a 20 minutos. Si después de hablar no tiene
              sentido para vos, no pasa nada — al menos vas a saber con quién
              estás hablando.
            </p>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#C9A227", color: "#5C0A14", borderRadius: "8px" }}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar una llamada
            </a>

            <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              ¿Preferís otra vía? También respondemos en{" "}
              <Link href="/contacto" className="underline underline-offset-2 hover:opacity-80">
                contacto
              </Link>
              .
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
