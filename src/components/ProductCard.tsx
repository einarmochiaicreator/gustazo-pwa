"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { type Product, formatPrice } from "@/lib/products";

const CATEGORY_GRADIENTS: Record<string, string> = {
  panaderia: "linear-gradient(135deg, #7a4a1a 0%, #c9882a 100%)",
  dulces: "linear-gradient(135deg, #5C0A14 0%, #a03550 100%)",
  pastas: "linear-gradient(135deg, #3d5a1a 0%, #7aa030 100%)",
};

const CATEGORY_EMOJIS: Record<string, string> = {
  panaderia: "🍞",
  dulces: "🍪",
  pastas: "🍝",
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

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg"
      style={{ backgroundColor: "#fff" }}>
      {/* Imagen o placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-5xl"
            style={{ background: CATEGORY_GRADIENTS[product.category] }}
          >
            <span role="img" aria-label={product.category}>
              {CATEGORY_EMOJIS[product.category]}
            </span>
          </div>
        )}

        {/* Badge */}
        {(product.badge || product.unit) && (
          <span
            className="absolute left-2 top-2 rounded-lg px-2 py-0.5 text-xs font-bold"
            style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
          >
            {product.unit || product.badge}
          </span>
        )}

        {/* No disponible overlay */}
        {!product.available && (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
            <span className="rounded-xl px-3 py-1 text-sm font-bold text-white">
              {product.badge ?? "Próximamente"}
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-sm font-bold leading-tight" style={{ color: "#5C0A14" }}>
          {product.name}
        </h3>
        <p className="mb-3 flex-1 text-xs leading-relaxed" style={{ color: "#7a5a5e" }}>
          {product.description}
        </p>

        {product.available ? (
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-black" style={{ color: "#5C0A14" }}>
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAdd}
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition active:scale-95"
              style={{
                backgroundColor: added ? "#3e7a10" : "#5C0A14",
                color: added ? "#fff" : "#C9A227",
              }}
            >
              {added ? (
                <>
                  <CheckIcon className="h-4 w-4" />
                  Agregado
                </>
              ) : (
                <>
                  <PlusIcon className="h-4 w-4" />
                  Agregar
                </>
              )}
            </button>
          </div>
        ) : (
          <span className="text-xs font-semibold" style={{ color: "#7a5a5e" }}>
            Disponible pronto
          </span>
        )}
      </div>
    </article>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
