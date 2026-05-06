"use client";

import Image from "next/image";
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
        {/* Banner de pedido */}
        <section style={{ backgroundColor: "#faf6ee", borderBottom: "1px solid #e8dcc8" }}>
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="mb-2 text-2xl font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
                  Realizá tu pedido
                </h1>
                <p className="text-sm leading-relaxed" style={{ color: "#5C0A14", opacity: 0.8 }}>
                  Pedidos abiertos · Retiro en local o envío a todo el país<br />
                  Te confirmamos por WhatsApp cuando esté listo
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 shrink-0">
                  <Image src="/logo-gustazo.png" alt="Gustazo" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>
                    Gustazo Gluten Free
                  </p>
                  <p className="text-xs" style={{ color: "#7a5a5e" }}>
                    R.N.E.: 04006318 · Córdoba, Argentina
                  </p>
                  <p className="text-xs" style={{ color: "#7a5a5e" }}>
                    100% sin gluten · Elaboración artesanal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secciones por categoría */}
        <div className="mx-auto max-w-6xl px-6 py-10 space-y-16">
          {CATEGORIES.map((cat) => {
            const products = PRODUCTS.filter((p) => p.category === cat.id);
            if (products.length === 0) return null;
            return (
              <section key={cat.id}>
                <h2
                  className="mb-8 text-2xl font-semibold uppercase tracking-wide"
                  style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}
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
          className="mt-8 py-8 text-center text-xs"
          style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}
        >
          <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Gustazo Gluten Free
          </p>
          <p className="mt-1 opacity-70">
            R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada
          </p>
          <p className="mt-1 opacity-70">
            Hecho con cariño en Córdoba · © {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
