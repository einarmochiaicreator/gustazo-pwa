import type { Metadata } from "next";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso legal | Gustazo",
};

export default function AvisoLegalPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="relative overflow-hidden" style={{ backgroundColor: "#5C0A14", minHeight: "160px" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.4)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-14 pb-20">
            <h1 className="text-4xl font-semibold uppercase tracking-wide" style={{ color: "#fff" }}>Aviso legal</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-10"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14 space-y-6 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Datos del titular</h2>
          <p>
            En cumplimiento con la Ley de Protección de Datos Personales (Ley 25.326) y normativa vigente de la República Argentina, se informa que el responsable de este sitio web es <strong>Gustazo</strong>, con domicilio en Lavalleja 1550, Alta Córdoba, Córdoba, Argentina. R.N.E.: 04006318.
          </p>
          <p>Contacto: <a href="mailto:glutenfree.gustazo@gmail.com" className="underline" style={{ color: "#5C0A14" }}>glutenfree.gustazo@gmail.com</a></p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Objeto</h2>
          <p>
            Este sitio web tiene como finalidad la presentación de los productos y servicios de Gustazo, así como la gestión de pedidos y consultas de clientes.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Propiedad intelectual</h2>
          <p>
            Todos los contenidos de este sitio web —incluyendo textos, imágenes, logotipos y diseño— son propiedad de Gustazo o cuentan con las licencias correspondientes. Queda prohibida su reproducción total o parcial sin autorización expresa.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Responsabilidad</h2>
          <p>
            Gustazo no se responsabiliza por los daños que pudieran derivarse del uso incorrecto de este sitio web ni por la información de terceros enlazada desde el mismo.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
