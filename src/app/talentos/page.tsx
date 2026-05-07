"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { CheckIcon, HeartIcon, SparkleIcon, LeafIcon, WhatsAppIcon } from "@/components/Icons";

const WA_NUMBER = "5493516632462";

const AREAS = [
  "Producción / panadería",
  "Atención al cliente",
  "Marketing y redes",
  "Logística y despachos",
  "Capacitaciones",
  "Otro",
];

export default function TalentosPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    area: "",
    experiencia: "",
    motivacion: "",
    privacidad: false,
  });

  function update(k: keyof typeof form, v: string | boolean) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Gustazo!\n\nQuiero sumarme al equipo. Te dejo mis datos:\n\n` +
      `Nombre: ${form.nombre}\n` +
      `Email: ${form.email}\n` +
      `Teléfono / WhatsApp: ${form.telefono || "—"}\n` +
      `Área de interés: ${form.area || "—"}\n\n` +
      `Experiencia / trayectoria:\n${form.experiencia || "—"}\n\n` +
      `Por qué quiero sumarme a Gustazo:\n${form.motivacion}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
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
              Buscamos talentos
            </h1>
            <p className="mt-3 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Si querés ser parte de algo más grande que un trabajo, leé esto.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* QUÉ BUSCAMOS */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Quiénes encajan acá
          </p>
          <h2
            className="mb-8 text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Personas que quieran transformar vidas, no solo ejecutar tareas.
          </h2>

          <p className="mb-10 text-base leading-relaxed md:text-lg" style={{ color: "#1a0a0c" }}>
            Buscamos gente que entienda que esto es un proyecto: cambiar cómo
            se vive con celiaquía en Argentina. No alcanza con saber hacer la
            tarea — necesitamos personas que propongan, prueben, se equivoquen
            y aprendan con nosotros.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                Icon: HeartIcon,
                title: "Conexión con el propósito",
                text: "Que te importe de verdad la persona del otro lado del mostrador o de la pantalla.",
              },
              {
                Icon: SparkleIcon,
                title: "Creatividad y propuesta",
                text: "Que te animes a proponer ideas, no solo a esperar instrucciones.",
              },
              {
                Icon: LeafIcon,
                title: "Ganas de crecer",
                text: "Queremos que crezcas con el proyecto. Aprender, capacitarte, mejorar — esa es la vibra.",
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

        {/* QUÉ OFRECEMOS */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-4xl px-6 py-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Qué te ofrecemos
            </p>
            <h2
              className="mb-10 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#5C0A14" }}
            >
              Un lugar para crecer mientras hacés algo que importa.
            </h2>

            <ul className="space-y-4">
              {[
                "Un ambiente de trabajo inspirador, con un equipo apasionado y comprometido.",
                "Acceso a programas de formación continua y oportunidades de capacitación.",
                "Espacio real para proponer ideas y participar en cómo evoluciona el proyecto.",
                "La satisfacción de ver tu trabajo reflejado en la calidad de vida de personas reales.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0" style={{ color: "#C9A227" }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORMULARIO */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Contanos quién sos
          </p>
          <h2
            className="mb-8 text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            ¿Querés sumarte?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Nombre completo *">
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                placeholder="Tu nombre y apellido"
                className="talentos-input"
              />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Email *">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="tu@email.com"
                  className="talentos-input"
                />
              </Field>
              <Field label="WhatsApp / Teléfono">
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                  placeholder="+54 351 ..."
                  className="talentos-input"
                />
              </Field>
            </div>

            <Field label="¿En qué área te gustaría aportar?">
              <select
                value={form.area}
                onChange={(e) => update("area", e.target.value)}
                className="talentos-input"
              >
                <option value="">Seleccioná un área</option>
                {AREAS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </Field>

            <Field label="Tu experiencia o trayectoria">
              <textarea
                rows={3}
                value={form.experiencia}
                onChange={(e) => update("experiencia", e.target.value)}
                placeholder="Contanos brevemente qué hiciste antes, dónde, cuánto tiempo..."
                className="talentos-input resize-none"
              />
            </Field>

            <Field label="¿Por qué querés sumarte a Gustazo? *">
              <textarea
                required
                rows={5}
                value={form.motivacion}
                onChange={(e) => update("motivacion", e.target.value)}
                placeholder="Esto es lo que más nos importa. Contanos qué te motiva, qué te conectó con nosotros, qué querés aportar..."
                className="talentos-input resize-none"
              />
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
              Enviar por WhatsApp
            </button>

            <p className="text-center text-xs" style={{ color: "#7a5a5e" }}>
              Al enviar se abre WhatsApp con tu mensaje listo. Te respondemos en menos de 24 horas hábiles.
            </p>
          </form>
        </section>

        <Footer />
      </main>

      <style jsx global>{`
        .talentos-input {
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
        .talentos-input:focus {
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
