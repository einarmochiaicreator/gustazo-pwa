import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mayoristas | Gustazo",
  description:
    "Productos sin gluten para cafés, dietéticas, restaurantes y kioscos. Esquema de descuentos por volumen y soluciones contra contaminación cruzada.",
};

export default function MayoristasPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#5C0A14", minHeight: "260px" }}
        >
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1
              className="text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl"
              style={{ color: "#fff" }}
            >
              Mayoristas
            </h1>
            <p className="mt-3 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Para cafés, dietéticas, restaurantes y kioscos.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-6 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
            Estamos armando esta sección. Acá vas a encontrar:
          </p>
          <ul className="mb-10 space-y-3 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
            <li>· Esquema de descuentos por volumen.</li>
            <li>· Soluciones para evitar contaminación cruzada en tu cocina.</li>
            <li>· Productos más pedidos por nuestros clientes B2B (pan de hamburguesa, pan de lomo, prepizza).</li>
            <li>· Capacitación para tu equipo.</li>
          </ul>

          <Link
            href="/contacto"
            className="inline-block px-7 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
            style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
          >
            Quiero ser mayorista →
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
