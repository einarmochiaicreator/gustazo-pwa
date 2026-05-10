import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Dónde encontrarnos | Gustazo",
  description:
    "Mapa de los puntos donde podés comprar productos Gustazo en Córdoba y otras ciudades — bares, dietéticas, restaurantes y kioscos.",
};

const MAP_EMBED_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1xMDTCGvXSnB2Uge5ahe-38yAsdTf71w&ehbc=2E312F&ll=-31.410720392091555,-64.221697812034&z=13";

export default function DondeEncontrarnosPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#5C0A14", minHeight: "260px" }}
        >
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1
              className="text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl"
              style={{ color: "#fff" }}
            >
              Dónde encontrarnos
            </h1>
            <p className="mt-3 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Estos son los lugares donde podés comprar nuestros productos.
            </p>
          </div>
          <div
            className="absolute -bottom-px left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 calc(100% + 1px), 100% 0, 100% calc(100% + 1px))" }}
          />
        </section>

        {/* MAPA */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Puntos de venta
            </p>
            <h2
              className="text-2xl font-semibold leading-tight md:text-3xl"
              style={{ color: "#5C0A14" }}
            >
              Buscá el más cercano y pasá a probar.
            </h2>
          </div>

          <div
            className="overflow-hidden"
            style={{ borderRadius: "8px", boxShadow: "0 6px 20px rgba(60,4,14,0.12)" }}
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="600"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de puntos de venta de Gustazo"
              allowFullScreen
            />
          </div>

          <p className="mt-4 text-xs italic" style={{ color: "#7a5a5e" }}>
            Usá el mapa para acercarte, hacer zoom y ver los datos de cada punto.
          </p>
        </section>

        {/* CTA — si no estás cerca */}
        <section style={{ backgroundColor: "#5C0A14", color: "#fff" }}>
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <MapPinIcon className="mx-auto mb-4 h-10 w-10" style={{ color: "#C9A227" }} />
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              ¿No tenés un punto cerca?
            </p>
            <h2
              className="mb-6 text-2xl font-semibold uppercase tracking-wide md:text-3xl"
              style={{ color: "#fff" }}
            >
              Te lo mandamos a tu casa.
            </h2>
            <p className="mb-10 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Comprás directo desde la tienda online y coordinamos el envío.
              En Córdoba capital salen el mismo día.
            </p>

            <Link
              href="/tienda"
              className="inline-block px-8 py-4 text-sm font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#C9A227", color: "#5C0A14", borderRadius: "8px" }}
            >
              Ver productos →
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
