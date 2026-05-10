import Image from "next/image";
import { MapPinIcon, TimerIcon, CheckIcon } from "@/components/Icons";

export default function LogisticsSection() {
  return (
    <section style={{ backgroundColor: "#5C0A14", color: "#fff" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#fff" }}
        >
          ¿Cómo te llega?
        </h2>

        {/* Córdoba capital — gráfico AMO CBA + 3 cards */}
        <div className="mb-14">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Córdoba capital
          </p>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="relative mx-auto h-40 w-56 shrink-0 md:mx-0 md:h-44 md:w-64">
              <Image
                src="/assets/amo-cba.png"
                alt="Amo Córdoba"
                fill
                className="object-contain"
                style={{ filter: "invert(1)" }}
                sizes="256px"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { Icon: MapPinIcon, title: "Retiro en local", text: "Pasás vos cuando puedas." },
                { Icon: MapPinIcon, title: "Puntos de recogida", text: "Coordinamos un punto cercano." },
                { Icon: TimerIcon, title: "Cadetería · Uber · Pedidos Ya", text: "Te llega rápido a tu casa." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "8px" }}
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
        </div>

        {/* Otras provincias — 2 cards + mapa Argentina */}
        <div className="mb-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Otras provincias
          </p>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "8px" }}>
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

              <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "8px" }}>
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

            <div className="relative mx-auto h-72 w-56 shrink-0 md:mx-0 md:h-80 md:w-64">
              <Image
                src="/assets/pais-argentina.png"
                alt="Mapa de Argentina con líneas de envío desde Córdoba a todo el país"
                fill
                className="object-contain"
                sizes="256px"
              />
            </div>
          </div>
        </div>

        {/* Pago */}
        <div className="grid grid-cols-1 gap-6 border-t pt-8 md:grid-cols-2 md:gap-12" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Cómo pagás
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <PayBadge label="Mercado Pago" Icon={MercadoPagoLogo} />
              <PayBadge label="Transferencia" Icon={BankLogo} />
              <PayBadge label="Efectivo" Icon={CashLogo} />
            </div>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              <CheckIcon className="h-4 w-4" /> Compralo tranquilo
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Estamos seguros de que te va a encantar. Y si por algo no,
              te devolvemos el 100%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PayBadge({ label, Icon }: { label: string; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5"
      style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "8px" }}
    >
      <Icon className="h-7 w-7" />
      <span className="text-sm font-semibold" style={{ color: "#fff" }}>{label}</span>
    </div>
  );
}

function MercadoPagoLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r="30" fill="#00B1EA" />
      <path
        d="M18 32c0-7 6-13 14-13s14 6 14 13c0 1.5-1.2 2.5-2.5 2.2-2-.5-3.7-1.5-5.5-1.5-1.7 0-3 .8-3 2 0 1.4 1.5 2 3 2.2 4 .5 8-.8 8 2.5 0 2.5-3 5-7 5-3.5 0-6-1.5-7-3-1 1.5-3.5 3-7 3-4 0-7-2.5-7-5 0-3.3 4-2 8-2.5 1.5-.2 3-.8 3-2.2 0-1.2-1.3-2-3-2-1.8 0-3.5 1-5.5 1.5-1.3.3-2.5-.7-2.5-2.2z"
        fill="#fff"
      />
    </svg>
  );
}

function BankLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M5 21V10" />
      <path d="M9 21V10" />
      <path d="M15 21V10" />
      <path d="M19 21V10" />
      <path d="M2 10L12 4l10 6" />
    </svg>
  );
}

function CashLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10v.01" />
      <path d="M18 14v.01" />
    </svg>
  );
}
