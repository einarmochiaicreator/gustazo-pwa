"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface QuickAnswer {
  q: string;
  a: React.ReactNode;
}

const WHATSAPP_NUMBER = "5493516632462";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, vengo desde la web de Gustazo y quería consultarles algo:"
)}`;

const FAQS: QuickAnswer[] = [
  {
    q: "¿Hacen envíos a todo el país?",
    a: (
      <>
        Sí. En Córdoba capital coordinamos retiro en local, puntos de recogida o cadetería.
        Al resto del país enviamos por Vía Cargo / Andreani / Sendbox. Los productos dulces
        van directo a tu casa; el pan al centro de distribución de tu ciudad para que llegue
        en menos de 24 hs y no envejezca.
        <br /><br />
        Más detalle en la sección <strong>¿Cómo te llega?</strong> de la home.
      </>
    ),
  },
  {
    q: "¿Son realmente sin gluten?",
    a: (
      <>
        Sí, <strong>100% sin gluten</strong>. Tenemos certificación <strong>RNE + RNPA + ANMAT</strong> —
        cada producto con su número registrado. Trabajamos en establecimiento elaborador
        exclusivo, donde no entra gluten. Pensamos cada receta para personas con celiaquía
        o sensibilidad al gluten.
      </>
    ),
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: (
      <>
        Aceptamos:
        <ul className="mt-2 ml-4 list-disc space-y-1">
          <li>Mercado Pago (tarjeta, débito, dinero en cuenta)</li>
          <li>Transferencia bancaria</li>
          <li>Efectivo (en retiro por local)</li>
        </ul>
      </>
    ),
  },
  {
    q: "¿Hacen venta mayorista?",
    a: (
      <>
        Sí. Trabajamos con bares, cafeterías, restaurantes y dietéticas hace más de 3 años
        (Bonafide entre ellos). Tenemos línea exclusiva mayorista y servicio de capacitación
        con bromatóloga incluido.
        <br /><br />
        Mirá <Link href="/alianzas" className="underline font-semibold">Alianzas</Link> o{" "}
        <Link href="/mayoristas" className="underline font-semibold">Mayoristas</Link>.
      </>
    ),
  },
  {
    q: "¿Dan cursos o capacitaciones?",
    a: (
      <>
        Sí. Nuestro programa principal es <strong>CREAR sin gluten — Formulación</strong>
        (presencial 16 hs u online 6 hs). Además damos talleres puntuales.
        <br /><br />
        Mirá todo en <Link href="/capacitaciones" className="underline font-semibold">/capacitaciones</Link>.
      </>
    ),
  },
  {
    q: "¿Dónde están ubicados?",
    a: (
      <>
        Estamos en <strong>Córdoba capital, Argentina</strong>. Pasás vos cuando puedas,
        coordinamos un punto de recogida cercano, o te lo enviamos por cadetería / Uber /
        Pedidos Ya. A otras provincias, enviamos por encomienda.
        <br /><br />
        Direcciones y horarios en <Link href="/donde-encontrarnos" className="underline font-semibold">Dónde encontrarnos</Link>.
      </>
    ),
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center shadow-lg transition active:scale-95"
        style={{
          backgroundColor: "#5C0A14",
          color: "#C9A227",
          borderRadius: "999px",
          boxShadow: "0 8px 24px rgba(60,4,14,0.35)",
        }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {!open && (
          <span
            className="absolute -top-0.5 -right-0.5 flex h-3 w-3"
            aria-hidden
          >
            <span
              className="absolute inline-flex h-full w-full animate-ping"
              style={{ backgroundColor: "#C9A227", borderRadius: "999px", opacity: 0.6 }}
            />
            <span
              className="relative inline-flex h-3 w-3"
              style={{ backgroundColor: "#C9A227", borderRadius: "999px" }}
            />
          </span>
        )}
      </button>

      {/* Panel del chat */}
      {open && (
        <div
          ref={panelRef}
          className="fixed bottom-24 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden"
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 20px 50px rgba(60,4,14,0.25)",
            maxHeight: "min(70vh, 560px)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ backgroundColor: "#5C0A14", color: "#fff" }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center text-sm font-bold"
              style={{ backgroundColor: "#C9A227", color: "#5C0A14", borderRadius: "999px" }}
            >
              G
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold leading-tight">Asistente Gustazo</p>
              <p className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.7)" }}>
                Respondemos en segundos
              </p>
            </div>
          </div>

          {/* Cuerpo */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Mensaje del bot */}
            <div className="mb-4 flex items-start gap-2">
              <div
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold"
                style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "999px" }}
              >
                G
              </div>
              <div
                className="text-sm leading-relaxed"
                style={{
                  backgroundColor: "#faf6ee",
                  color: "#1a0a0c",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  maxWidth: "85%",
                }}
              >
                ¡Hola! 👋 Te ayudo a encontrar lo que buscás. Elegí una pregunta o
                escribinos por WhatsApp si tu duda no está acá.
              </div>
            </div>

            {/* Respuesta activa (si hay) */}
            {activeIdx !== null && (
              <>
                <div className="mb-3 flex justify-end">
                  <div
                    className="text-sm leading-relaxed"
                    style={{
                      backgroundColor: "#5C0A14",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      maxWidth: "85%",
                    }}
                  >
                    {FAQS[activeIdx].q}
                  </div>
                </div>
                <div className="mb-4 flex items-start gap-2">
                  <div
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "999px" }}
                  >
                    G
                  </div>
                  <div
                    className="text-sm leading-relaxed"
                    style={{
                      backgroundColor: "#faf6ee",
                      color: "#1a0a0c",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      maxWidth: "85%",
                    }}
                  >
                    {FAQS[activeIdx].a}
                  </div>
                </div>
              </>
            )}

            {/* Quick replies */}
            <p className="mb-2 mt-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#7a5a5e" }}>
              {activeIdx !== null ? "Otras consultas" : "Preguntas frecuentes"}
            </p>
            <div className="flex flex-col gap-2">
              {FAQS.map((f, i) =>
                i === activeIdx ? null : (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className="text-left text-sm font-medium transition hover:bg-[#f0e8d6] active:scale-[0.98]"
                    style={{
                      border: "1px solid #d0c4b0",
                      color: "#5C0A14",
                      borderRadius: "8px",
                      padding: "8px 12px",
                    }}
                  >
                    {f.q}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Footer — WhatsApp */}
          <div
            className="border-t px-4 py-3"
            style={{ borderColor: "#e8dcc8", backgroundColor: "#faf6ee" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 text-sm font-bold transition active:scale-[0.98]"
              style={{
                backgroundColor: "#25D366",
                color: "#fff",
                borderRadius: "8px",
                padding: "10px 14px",
              }}
            >
              <WhatsAppIcon />
              Hablar con un humano
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2z" />
    </svg>
  );
}
