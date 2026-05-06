import { MapPinIcon, TimerIcon, CheckIcon } from "@/components/Icons";

export default function LogisticsSection() {
  return (
    <section style={{ backgroundColor: "#5C0A14", color: "#fff" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#fff" }}
        >
          Cómo te llega.
        </h2>

        {/* Córdoba capital */}
        <div className="mb-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Córdoba capital
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { Icon: MapPinIcon, title: "Retiro en local", text: "Pasás vos cuando puedas." },
              { Icon: MapPinIcon, title: "Punto pickup", text: "Coordinamos un punto cercano." },
              { Icon: TimerIcon, title: "Cadetería · Uber · Pedidos Ya", text: "Te llega rápido a tu casa." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "3px" }}
              >
                <item.Icon className="mb-3 h-7 w-7" style={{ color: "#C9A227" }} />
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide" style={{ color: "#fff" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Otras provincias */}
        <div className="mb-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Otras provincias
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "3px" }}>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: "#C9A227" }}>
                Productos dulces
              </p>
              <p className="mb-2 text-base font-semibold" style={{ color: "#fff" }}>
                Te los mandamos a tu casa.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                Budines, alfajores, cookies, pasta frola.
                Duran una semana sin perder nada.
              </p>
            </div>

            <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "3px" }}>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: "#C9A227" }}>
                Pan y panificados
              </p>
              <p className="mb-2 text-base font-semibold" style={{ color: "#fff" }}>
                Coordinás el transportista.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                Vía Cargo, Andreani, Sendbox o el que prefieras.
                Nosotros lo despachamos. El paquete tiene que llegar al
                centro de distribución de tu ciudad en menos de 24 horas,
                y lo retirás desde ahí.
              </p>
              <p className="mt-3 text-xs italic leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                ¿Por qué no a tu casa? Porque sumar 2-3 días más al envío
                hace que el pan empiece a envejecer.
              </p>
            </div>
          </div>
        </div>

        {/* Pago */}
        <div className="grid grid-cols-1 gap-4 border-t pt-8 md:grid-cols-2" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Cómo pagás
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Mercado Pago (10% de recargo) · Transferencia · Efectivo
            </p>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              <CheckIcon className="h-4 w-4" /> Garantía
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Si no te gusta, te devolvemos el 100%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
