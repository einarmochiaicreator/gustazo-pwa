"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";

const WA_NUMBER = "5493516632462";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", interes: "", mensaje: "" });

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Gustazo! 👋\n\nNombre: ${form.nombre}\nEmail: ${form.email}\nInterés: ${form.interes}\n\nMensaje:\n${form.mensaje}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>

        {/* HERO */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#5C0A14", minHeight: "220px" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.4)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1 className="text-5xl font-semibold uppercase leading-tight tracking-wide md:text-6xl" style={{ color: "#fff" }}>
              Contacto
            </h1>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              ¿Tenés alguna consulta, pedido especial o querés saber más sobre nuestros cursos?<br />
              Completá el formulario y te respondemos a la brevedad.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </section>

        {/* CONTENIDO — 2 columnas (info izq / form der) */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">

            {/* Columna izquierda — mapa + info */}
            <div className="space-y-8">
              {/* Mapa embed */}
              <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <iframe
                  src="https://maps.google.com/maps?q=Lavalleja+1550,+Alta+Córdoba,+Córdoba,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Gustazo"
                />
              </div>

              {/* Datos de contacto */}
              <div className="space-y-5">
                <InfoRow icon="📍" label="Dirección" value="Lavalleja 1550, Alta Córdoba, Córdoba" />
                <InfoRow
                  icon="📱"
                  label="WhatsApp"
                  value="+54 351 663 2462"
                  href={`https://wa.me/${WA_NUMBER}`}
                />
                <InfoRow
                  icon="✉️"
                  label="Email"
                  value="glutenfree.gustazo@gmail.com"
                  href="mailto:glutenfree.gustazo@gmail.com"
                />
                <InfoRow
                  icon="📷"
                  label="Instagram"
                  value="@gustazo.glutenfree"
                  href="https://www.instagram.com/gustazo.glutenfree"
                />
                <InfoRow
                  icon="🕐"
                  label="Horario"
                  value={"Lun–Vie: 08:00–18:00 hs\nSáb: 10:00–14:00 hs"}
                />
              </div>
            </div>

            {/* Columna derecha — formulario */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Nombre *">
                    <input
                      type="text" required value={form.nombre}
                      onChange={(e) => update("nombre", e.target.value)}
                      placeholder="Tu nombre"
                      className="contact-input"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      type="email" required value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="tu@email.com"
                      className="contact-input"
                    />
                  </Field>
                </div>

                <Field label="¿Qué te interesa?">
                  <select
                    value={form.interes}
                    onChange={(e) => update("interes", e.target.value)}
                    className="contact-input"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="Pedido especial">Pedido especial</option>
                    <option value="Consulta sobre productos">Consulta sobre productos</option>
                    <option value="Cursos de formulación">Cursos de formulación</option>
                    <option value="Talleres de cocina">Talleres de cocina</option>
                    <option value="Venta mayorista">Venta mayorista / B2B</option>
                    <option value="Otro">Otro</option>
                  </select>
                </Field>

                <Field label="Mensaje *">
                  <textarea
                    required rows={6} value={form.mensaje}
                    onChange={(e) => update("mensaje", e.target.value)}
                    placeholder="Contanos en qué podemos ayudarte..."
                    className="contact-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold uppercase tracking-wide transition active:scale-[0.98]"
                  style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
                >
                  Enviar por WhatsApp
                </button>

                <p className="text-center text-xs" style={{ color: "#7a5a5e" }}>
                  Al hacer clic se abrirá WhatsApp con tu mensaje listo para enviar.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs" style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}>
          <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>Gustazo Gluten Free</p>
          <p className="mt-2 opacity-70">R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada</p>
          <p className="mt-1 opacity-70">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
        </footer>
      </main>

      <style jsx global>{`
        .contact-input {
          width: 100%;
          border: 1.5px solid #d0c4b0;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: #1a0a0c;
          background: #fff;
          outline: none;
          transition: border-color 0.15s;
          border-radius: 0;
        }
        .contact-input:focus {
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

function InfoRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-lg">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#7a5a5e" }}>{label}</p>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium underline-offset-2 hover:underline whitespace-pre-line"
            style={{ color: "#5C0A14" }}>
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium whitespace-pre-line" style={{ color: "#5C0A14" }}>{value}</p>
        )}
      </div>
    </div>
  );
}
