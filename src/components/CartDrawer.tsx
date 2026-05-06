"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, totalPrice, totalItems } = useCart();

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Panel */}
      <aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col shadow-2xl transition-transform duration-300"
        style={{
          backgroundColor: "#faf6ee",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between px-5 py-4" style={{ backgroundColor: "#5C0A14" }}>
          <h2 className="text-lg font-bold" style={{ color: "#C9A227" }}>
            Tu pedido {totalItems > 0 && <span className="text-sm font-normal opacity-80">({totalItems} items)</span>}
          </h2>
          <button onClick={closeCart} className="rounded-full p-1.5 transition hover:bg-white/10" aria-label="Cerrar carrito">
            <CloseIcon className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Cuerpo */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <span className="text-5xl">🛒</span>
              <p className="font-semibold" style={{ color: "#5C0A14" }}>Tu carrito está vacío</p>
              <p className="text-sm" style={{ color: "#7a5a5e" }}>Agregá productos desde la tienda</p>
              <button
                onClick={closeCart}
                className="mt-2 rounded-xl px-5 py-2 text-sm font-bold"
                style={{ backgroundColor: "#5C0A14", color: "#C9A227" }}
              >
                Ver productos
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3 rounded-xl p-3" style={{ backgroundColor: "#fff" }}>
                  {/* Emoji placeholder */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-2xl"
                    style={{ background: "linear-gradient(135deg, #5C0A14, #a03550)" }}>
                    {product.category === "panaderia" ? "🍞" : product.category === "dulces" ? "🍪" : "🍝"}
                  </div>

                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <p className="truncate text-sm font-bold" style={{ color: "#5C0A14" }}>{product.name}</p>
                    <p className="text-sm font-semibold" style={{ color: "#C9A227" }}>{formatPrice(product.price)}</p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold transition"
                        style={{ backgroundColor: "#f0e8d6", color: "#5C0A14" }}
                        aria-label="Restar"
                      >−</button>
                      <span className="w-5 text-center text-sm font-bold" style={{ color: "#5C0A14" }}>{quantity}</span>
                      <button
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold transition"
                        style={{ backgroundColor: "#f0e8d6", color: "#5C0A14" }}
                        aria-label="Sumar"
                      >+</button>

                      <button
                        onClick={() => removeItem(product.id)}
                        className="ml-auto rounded-full p-1 transition"
                        style={{ color: "#c0505a" }}
                        aria-label="Eliminar"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer con total y checkout */}
        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-3" style={{ borderColor: "#e0d4c0" }}>
            <div className="flex items-center justify-between">
              <span className="font-semibold" style={{ color: "#5C0A14" }}>Total</span>
              <span className="text-xl font-black" style={{ color: "#5C0A14" }}>{formatPrice(totalPrice)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full rounded-2xl py-3 text-center text-base font-bold shadow transition active:scale-[0.98]"
              style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
            >
              Ir a pagar →
            </Link>
            <p className="text-center text-xs" style={{ color: "#7a5a5e" }}>
              Retiro en local o delivery a todo el país
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  );
}
