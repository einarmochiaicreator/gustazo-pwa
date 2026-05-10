import type { Metadata } from "next";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y condiciones | Gustazo",
};

export default function TerminosCondicionesPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="relative overflow-hidden" style={{ backgroundColor: "#5C0A14", minHeight: "160px" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.4)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-14 pb-20">
            <h1 className="text-4xl font-semibold uppercase tracking-wide" style={{ color: "#fff" }}>Términos y condiciones</h1>
          </div>
          <div className="absolute -bottom-px left-0 right-0 h-10"
            style={{ background: "#fff", clipPath: "polygon(0 calc(100% + 1px), 100% 0, 100% calc(100% + 1px))" }} />
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14 space-y-6 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Pedidos</h2>
          <p>
            Los pedidos realizados a través de este sitio están sujetos a disponibilidad de stock. Una vez confirmado el pago, Gustazo se comunicará con el cliente por WhatsApp para coordinar la entrega o el retiro en nuestro local de Alta Córdoba.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Precios</h2>
          <p>
            Los precios publicados en el sitio están expresados en pesos argentinos (ARS) y pueden actualizarse sin previo aviso. El precio aplicable es el vigente al momento de la confirmación del pedido.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Métodos de pago</h2>
          <p>
            Aceptamos pagos a través de MercadoPago (tarjeta de crédito, débito y transferencia) y efectivo en el punto de retiro.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Entregas</h2>
          <p>
            Las entregas se coordinan individualmente con cada cliente. Los tiempos de entrega están sujetos a la zona y la disponibilidad del servicio de envío. Gustazo no se responsabiliza por demoras causadas por el servicio de mensajería.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Cancelaciones y devoluciones</h2>
          <p>
            Dada la naturaleza artesanal y perecedera de los productos, no se aceptan devoluciones salvo en caso de error nuestro o producto en mal estado. En ese caso, contactanos dentro de las 24 hs de recibido el pedido.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Cursos y talleres</h2>
          <p>
            El pago de cursos y talleres confirma la reserva de la plaza. Las cancelaciones con menos de 48 hs de anticipación no son reembolsables, pero se puede reprogramar para la siguiente edición disponible.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
