"use client";

import { useState } from "react";

export default function HowToReactivate() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-16">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 text-left transition flex items-center justify-between gap-4"
        style={{
          backgroundColor: "#fff",
          borderRadius: "3px",
          boxShadow: "0 2px 8px rgba(60,4,14,0.06)",
        }}
        aria-expanded={open}
      >
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Bonus
          </p>
          <p className="text-base font-semibold" style={{ color: "#5C0A14" }}>
            ¿Querés saber cómo reactivarlo bien?
          </p>
        </div>
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center text-xl transition-transform"
          style={{
            backgroundColor: open ? "#5C0A14" : "#faf6ee",
            color: open ? "#C9A227" : "#5C0A14",
            borderRadius: "999px",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          +
        </span>
      </button>

      {open && (
        <div
          className="mt-2 grid grid-cols-1 gap-12 p-8 md:grid-cols-2"
          style={{ backgroundColor: "#fff", borderRadius: "3px" }}
        >
          <div>
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Paso 1 — Descongelar
            </h4>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              <strong>Si tenés tiempo:</strong> dejalo a temperatura ambiente
              hasta que la miga se ablande.
            </p>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              <strong>Si estás apurado:</strong> microondas en{" "}
              <strong style={{ color: "#5C0A14" }}>potencia mínima</strong>. Sí, mínima — no máxima.
              A potencia máxima la miga se gelifica y el pan se arruina.
              A potencia mínima las moléculas de agua se mueven despacio,
              el pan se descongela parejo y mantiene su textura.
            </p>

            <h4 className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Paso 2 — Calor directo
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Horno, sartén, tostadora o parrilla. Lo que tengas a mano.
              Este paso no se saltea.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-5" style={{ backgroundColor: "#fdf8e8", borderLeft: "3px solid #C9A227" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#5C0A14" }}>
                El truco que cambia todo
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                Antes de meter el pan al horno, rocialo apenas con un poco
                de agua por fuera. Eso hace que quede prácticamente igual
                que recién sacado del horno.
              </p>
              <p className="mt-2 text-xs italic" style={{ color: "#7a5a5e" }}>
                Solo para panes. Las cookies y los dulces no llevan agua.
              </p>
            </div>

            <div className="p-5" style={{ backgroundColor: "#faf6ee" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#5C0A14" }}>
                ¿Cuándo está listo?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                Cuando la miga está blanda y la corteza está crujiente.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
