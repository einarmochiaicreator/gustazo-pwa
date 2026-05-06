"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

const TOP_IDS = ["pan-campo", "prepizza", "cookie-red-velvet", "budin-limon"];

const TAGLINES: Record<string, string> = {
  "pan-campo": "Tu compañero de todos los días.",
  "prepizza": "Para la cena del finde con amigos.",
  "cookie-red-velvet": "Para acompañar el cafecito.",
  "budin-limon": "Para los mates en el parque.",
};

export default function TopProducts() {
  const top = TOP_IDS
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#5C0A14" }}
        >
          Lo que más nos piden.
        </h2>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {top.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
              {TAGLINES[product.id] && (
                <p
                  className="mt-2 text-xs italic leading-snug"
                  style={{ color: "#7a5a5e" }}
                >
                  {TAGLINES[product.id]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/tienda"
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-wide transition active:scale-95"
            style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
          >
            Ver tienda completa →
          </Link>
        </div>
      </div>
    </section>
  );
}
