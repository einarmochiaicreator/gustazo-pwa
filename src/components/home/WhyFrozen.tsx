import { ClockIcon, LeafIcon, CalendarIcon } from "@/components/Icons";
import HowToReactivate from "./HowToReactivate";

export default function WhyFrozen() {
  return (
    <section style={{ backgroundColor: "#faf6ee" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#5C0A14" }}
        >
          ¿Por qué te lo entregamos congelado?
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

        <HowToReactivate />
      </div>
    </section>
  );
}
