"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export default function StorePage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>

        {/* HERO — fondo foto (o bordo si no hay imagen), corte diagonal abajo */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#5C0A14",
            backgroundImage: "url('/hero-gustazo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "340px",
          }}
        >
          {/* Overlay oscuro para que el texto se lea */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(60,4,14,0.72)" }}
          />

          {/* Contenido */}
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h2
              className="mb-4 text-4xl font-semibold uppercase leading-tight tracking-wide md:text-5xl"
              style={{ color: "#fff" }}
            >
              Comé tranquilo.<br />Acá es seguro de verdad.
            </h2>
            <p className="mb-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
              Panadería y pastelería 100% sin gluten. Sin contaminación cruzada, sin excepciones.
            </p>
            <div className="space-y-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>Pedidos abiertos · Retiro en Alta Córdoba o envío a todo el país</p>
              <p className="mt-2 text-xs opacity-70">
                Elaborador Certificado · R.N.E.: 04006318 · 9 productos con RNPA · Córdoba, Argentina
              </p>
            </div>
          </div>

          {/* Corte diagonal en el borde inferior */}
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{
              background: "#fff",
              clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
            }}
          />
        </section>

        {/* Secciones por categoría */}
        <div className="mx-auto max-w-6xl px-6 py-12 space-y-16">
          {CATEGORIES.map((cat) => {
            const products = PRODUCTS.filter((p) => p.category === cat.id);
            if (products.length === 0) return null;
            return (
              <section key={cat.id}>
                <h2
                  className="mb-8 text-2xl font-semibold uppercase tracking-widest"
                  style={{
                    color: "#5C0A14",
                    borderBottom: "2px solid #C9A227",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {cat.label} sin gluten
                </h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <footer
          className="mt-8 py-10 text-center text-xs"
          style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}
        >
          <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Gustazo
          </p>
          <p className="mt-2 opacity-70">
            R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada
          </p>
          <p className="mt-1 opacity-70">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}
