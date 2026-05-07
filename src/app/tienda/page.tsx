"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";

type SortKey = "default" | "price-asc" | "price-desc" | "name-asc";

export default function TiendaPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sortKey, setSortKey] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    let list = activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);
    if (sortKey === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortKey === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortKey === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name, "es"));
    return list;
  }, [activeCategory, sortKey]);

  const grouped = useMemo(() => {
    if (activeCategory !== "all" || sortKey !== "default") return null;
    return CATEGORIES.map((cat) => ({
      ...cat,
      products: PRODUCTS.filter((p) => p.category === cat.id),
    })).filter((g) => g.products.length > 0);
  }, [activeCategory, sortKey]);

  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Hero corto de tienda */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#5C0A14", minHeight: "200px" }}
        >
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 pb-16">
            <h1
              className="text-4xl font-semibold uppercase leading-tight tracking-wide md:text-5xl"
              style={{ color: "#fff" }}
            >
              Tienda
            </h1>
            <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Todo nuestro catálogo. Pan, dulces y pastas, hechos en Córdoba.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-10"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        <div className="mx-auto max-w-6xl px-6 pt-10 pb-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="shrink-0 border py-2 pl-3 pr-8 text-sm font-medium appearance-none"
              style={{
                borderColor: "#d0c4b0",
                color: "#5C0A14",
                backgroundColor: "#fff",
                borderRadius: "8px",
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235C0A14' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
              }}
            >
              <option value="default">Orden: por defecto</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="name-asc">Nombre: A–Z</option>
            </select>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-8 space-y-16">
          {grouped ? (
            grouped.map((cat) => (
              <section key={cat.id}>
                <h2
                  className="mb-8 text-2xl font-semibold uppercase tracking-widest"
                  style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}
                >
                  {cat.label} sin gluten
                </h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                  {cat.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
