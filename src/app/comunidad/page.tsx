"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { CheckIcon, WhatsAppIcon, HeartIcon, SparkleIcon, LeafIcon } from "@/components/Icons";

const WA_NUMBER = "5493516632462";
const GROUP_LINK = "https://chat.whatsapp.com/E45ozTPs3iUBSkMwYw1uRk?mode=gi_t";

const RELACIONES = [
  "Soy celíaco/a",
  "Tengo un familiar celíaco/a",
  "Soy profesional de la salud",
  "Estoy investigando / interesado/a",
];

export default function ComunidadPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    relacion: "",
    privacidad: false,
  });

  function update(k: keyof typeof form, v: string | boolean) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Aviso a Gustazo con los datos
    const text = encodeURIComponent(
      `Hola Gustazo! Me sumé a la comunidad celíaca.\n\n` +
      `Nombre: ${form.nombre}\n` +
      `Email: ${form.email}\n` +
      `Mi relación con la celiaquía: ${form.relacion || "—"}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");

    // Y al mismo tiempo abro el grupo
    window.open(GROUP_LINK, "_blank");
  }

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
              Comunidad celíaca
            </h1>
            <p className="mt-3 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Un espacio donde compartimos lo que vivimos.
            </p>
          </div>
          <div
            className="absolute -bottom-px left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 calc(100% + 1px), 100% 0, 100% calc(100% + 1px))" }}
          />
        </section>

        {/* QUÉ VAS A ENCONTRAR */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Qué vas a encontrar
          </p>
          <h2
            className="mb-12 text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Información útil de gente que la vive.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: SparkleIcon,
                title: "Recetas",
                text: "Recetas probadas para hacer en casa, simples y bien explicadas.",
              },
              {
                Icon: LeafIcon,
                title: "Lugares seguros",
                text: "Bares, restaurantes y kioscos con productos sin gluten confiables.",
              },
              {
                Icon: HeartIcon,
                title: "Tips y experiencias",
                text: "Lo que aprendimos en años de vivir con celiaquía. Sin filtros.",
              },
              {
                Icon: CheckIcon,
                title: "Novedades del mundo celíaco",
                text: "Cambios en la legislación, avances científicos, eventos y noticias que benefician a la comunidad.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-6"
                style={{ backgroundColor: "#faf6ee", borderRadius: "8px" }}
              >
                <p.Icon className="mb-4 h-8 w-8" style={{ color: "#C9A227" }} />
                <h3 className="mb-2 text-base font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FORMULARIO */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-2xl px-6 py-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Sumate al grupo
            </p>
            <h2
              className="mb-6 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#5C0A14" }}
            >
              Es gratis y abierto.
            </h2>
            <p className="mb-10 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
              Dejanos tus datos y te llevamos directo al grupo de WhatsApp.
              No hacemos spam, no compartimos tu info con nadie.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Nombre *">
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  placeholder="Cómo querés que te llamemos"
                  className="comunidad-input"
                />
              </Field>

              <Field label="Email *">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="tu@email.com"
                  className="comunidad-input"
                />
              </Field>

              <Field label="¿Cuál es tu relación con la celiaquía?">
                <select
                  value={form.relacion}
                  onChange={(e) => update("relacion", e.target.value)}
                  className="comunidad-input"
                >
                  <option value="">Seleccioná una opción</option>
                  {RELACIONES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </Field>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.privacidad}
                  onChange={(e) => update("privacidad", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#5C0A14]"
                />
                <span className="text-xs leading-relaxed" style={{ color: "#7a5a5e" }}>
                  He leído y acepto la{" "}
                  <a href="/politica-privacidad" className="underline" style={{ color: "#5C0A14" }}>
                    política de privacidad
                  </a>
                  . *
                </span>
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-wide transition active:scale-[0.98]"
                style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "8px" }}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Unirme al grupo
              </button>

              <p className="text-center text-xs" style={{ color: "#7a5a5e" }}>
                Al enviar se abre WhatsApp con el grupo listo para que entres.
              </p>
            </form>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx global>{`
        .comunidad-input {
          width: 100%;
          border: 1.5px solid #d0c4b0;
          padding: 0.75rem 0.875rem;
          font-size: 0.9375rem;
          color: #1a0a0c;
          background: #fff;
          outline: none;
          transition: border-color 0.15s;
          border-radius: 8px;
        }
        .comunidad-input:focus {
          border-color: #5C0A14;
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
        {label}
      </label>
      {children}
    </div>
  );
}
