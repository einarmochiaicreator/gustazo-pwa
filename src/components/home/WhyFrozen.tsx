import { ClockIcon, LeafIcon, CalendarIcon } from "@/components/Icons";

export default function WhyFrozen() {
  return (
    <section style={{ backgroundColor: "#faf6ee" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#5C0A14" }}
        >
          ¿Por qué te lo mandamos congelado?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <ClockIcon className="mb-4 h-10 w-10" style={{ color: "#C9A227" }} />
            <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Sabor recién hecho
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Lo congelamos apenas sale del horno, todavía tibio.
              La humedad queda atrapada adentro. Cuando lo descongelás bien,
              te queda como recién horneado.
            </p>
          </div>

          <div>
            <LeafIcon className="mb-4 h-10 w-10" style={{ color: "#C9A227" }} />
            <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Más fácil para tu cuerpo
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Cuando un pan se enfría y se congela, los almidones se reorganizan.
              Tu cuerpo los procesa más lento — menos pico de azúcar, más liviano.
            </p>
          </div>

          <div>
            <CalendarIcon className="mb-4 h-10 w-10" style={{ color: "#C9A227" }} />
            <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Te dura 3 meses
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Comprás cuando querés, descongelás solo lo que necesitás.
              Tres meses en el freezer sin perder nada.
            </p>
          </div>
        </div>

        {/* Sub-sección — cómo lo reactivás */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2" style={{ backgroundColor: "#fff", padding: "2.5rem", borderRadius: "3px" }}>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Cómo lo reactivás
            </p>
            <h3 className="mb-6 text-2xl font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Dos pasos. Sin trucos raros.
            </h3>

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
            <p className="mb-4 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
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
      </div>
    </section>
  );
}
