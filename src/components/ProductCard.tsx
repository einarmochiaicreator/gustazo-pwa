"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { type Product, formatPrice } from "@/lib/products";
import { BreadIcon, CakeIcon, PastaIcon, CheckIcon } from "@/components/Icons";

const CATEGORY_BG: Record<string, string> = {
  panaderia: "#c9882a",
  dulces:    "#5C0A14",
  pastas:    "#3d5a1a",
};

const CATEGORY_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  panaderia: BreadIcon,
  dulces:    CakeIcon,
  pastas:    PastaIcon,
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 1500);
  }

  const CategoryIcon = CATEGORY_ICON[product.category];

  return (
    <article className="flex flex-col">
      {/* Imagen — cuadrada, sin border-radius */}
      <div className="relative w-full" style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ backgroundColor: CATEGORY_BG[product.category] }}
          >
            <CategoryIcon className="h-12 w-12 opacity-40 text-white" />
          </div>
        )}

        {product.unit && (
          <span
            className="absolute left-0 top-0 px-2 py-1 text-xs font-bold"
            style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
          >
            {product.unit}
          </span>
        )}

        {!product.available && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <span className="text-sm font-bold text-white">Próximamente</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col pt-3">
        <h3
          className="mb-1 text-base font-semibold uppercase leading-tight tracking-wide"
          style={{ color: "#5C0A14" }}
        >
          {product.name}
        </h3>

        {product.available ? (
          <>
            <p className="mb-3 text-sm font-bold" style={{ color: "#1a0a0c" }}>
              {formatPrice(product.price)}
            </p>
            <button
              onClick={handleAdd}
              className="flex w-full items-center justify-center gap-1.5 py-2.5 text-sm font-bold transition active:scale-[0.98]"
              style={{
                backgroundColor: added ? "#2e6b0e" : "#5C0A14",
                color: added ? "#fff" : "#C9A227",
                borderRadius: "3px",
              }}
            >
              {added && <CheckIcon className="h-4 w-4" />}
              {added ? "Agregado" : "Agregar al pedido"}
            </button>
          </>
        ) : (
          <p className="text-xs font-semibold" style={{ color: "#7a5a5e" }}>
            Disponible pronto
          </p>
        )}
      </div>
    </article>
  );
}
