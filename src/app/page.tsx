"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const availableCount = PRODUCTS.filter((p) => p.available).length;

  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#faf6ee", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-14 text-center"
          style={{ backgroundColor: "#5C0A14" }}
        >
          {/* Blur decorativo */}
          <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "#C9A227" }} />

          <div className="relative mb-5 h-24 w-24">
            <Image src="/logo-gustazo.png" alt="Gustazo" fill className="object-contain" priority />
          </div>

          <h1 className="mb-2 text-3xl font-black leading-tight tracking-tight" style={{ color: "#C9A227" }}>
            Gustazo Gluten Free
          </h1>
          <p className="mb-1 text-base font-medium" style={{ color: "#e8d4b0" }}>
            Panadería & Repostería artesanal sin gluten
          </p>
          <p className="mb-5 text-xs opacity-60" style={{ color: "#e8d4b0" }}>
            R.N.E.: 04006318 · Córdoba, Argentina
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Pill icon="🌾" text="100% sin gluten" />
            <Pill icon="🏠" text="Elaboración artesanal" />
            <Pill icon="🚚" text="Envíos a todo el país" />
          </div>
        </section>

        {/* Categorías + grilla */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          {/* Subtítulo */}
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-xl font-bold" style={{ color: "#5C0A14" }}>
              Nuestros productos
            </h2>
            <span className="text-sm" style={{ color: "#7a5a5e" }}>
              {availableCount} disponibles
            </span>
          </div>

          {/* Filtros */}
          <div className="mb-6">
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>

          {/* Grilla de productos */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg font-semibold" style={{ color: "#5C0A14" }}>
                No hay productos en esta categoría aún.
              </p>
            </div>
          )}
        </section>

        {/* Banner categorías destacadas */}
        <section className="mx-auto max-w-6xl px-4 pb-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.category === cat.id && p.available).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-3 rounded-2xl px-5 py-4 text-left transition hover:opacity-90 active:scale-[0.98]"
                  style={{ backgroundColor: "#5C0A14" }}
                >
                  <span className="text-3xl">{cat.emoji}</span>
                  <div>
                    <p className="font-bold" style={{ color: "#C9A227" }}>{cat.label}</p>
                    <p className="text-xs" style={{ color: "#e8d4b0", opacity: 0.8 }}>
                      {count} producto{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-xs" style={{ color: "#7a5a5e" }}>
          <p>Hecho con cariño en Córdoba · Gustazo Gluten Free © {new Date().getFullYear()}</p>
          <p className="mt-1">R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada</p>
        </footer>
      </main>
    </>
  );
}

function Pill({ icon, text }: { icon: string; text: string }) {
  return (
    <span
      className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold"
      style={{ backgroundColor: "rgba(201,162,39,0.15)", color: "#C9A227", border: "1px solid rgba(201,162,39,0.3)" }}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </span>
  );
}
