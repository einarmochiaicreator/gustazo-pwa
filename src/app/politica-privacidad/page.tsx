import type { Metadata } from "next";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidad | Gustazo",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="relative overflow-hidden" style={{ backgroundColor: "#5C0A14", minHeight: "160px" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.4)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-14 pb-20">
            <h1 className="text-4xl font-semibold uppercase tracking-wide" style={{ color: "#fff" }}>Política de privacidad</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-10"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14 space-y-6 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Responsable del tratamiento</h2>
          <p>
            <strong>Gustazo</strong> — Lavalleja 1550, Alta Córdoba, Córdoba, Argentina.<br />
            Email: <a href="mailto:glutenfree.gustazo@gmail.com" className="underline" style={{ color: "#5C0A14" }}>glutenfree.gustazo@gmail.com</a>
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Datos que recopilamos</h2>
          <p>
            Recopilamos los datos que nos proporcionás voluntariamente a través de formularios de contacto, registro de cuenta o pedidos: nombre, apellido, correo electrónico, teléfono y dirección de entrega.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Finalidad</h2>
          <p>
            Los datos recopilados se utilizan para gestionar pedidos, responder consultas, coordinar entregas y, con tu consentimiento, enviarte comunicaciones sobre novedades y promociones.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Tus derechos</h2>
          <p>
            De acuerdo con la Ley 25.326 de Protección de Datos Personales, podés ejercer tus derechos de acceso, rectificación, supresión y oposición escribiéndonos a <a href="mailto:glutenfree.gustazo@gmail.com" className="underline" style={{ color: "#5C0A14" }}>glutenfree.gustazo@gmail.com</a>.
          </p>

          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>Seguridad</h2>
          <p>
            Adoptamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdida o alteración.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
