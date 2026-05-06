"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { totalItems, openCart } = useCart();

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 shadow-sm"
      style={{ backgroundColor: "#5C0A14" }}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-10 w-10">
          <Image
            src="/logo-gustazo.png"
            alt="Gustazo Gluten Free"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="hidden text-sm font-semibold tracking-wide sm:block" style={{ color: "#C9A227" }}>
          Gustazo Gluten Free
        </span>
      </Link>

      <button
        onClick={openCart}
        className="relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition active:scale-95"
        style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
        aria-label="Ver carrito"
      >
        <CartIcon className="h-5 w-5" />
        <span className="hidden sm:inline">Carrito</span>
        {totalItems > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-black"
            style={{ backgroundColor: "#5C0A14", color: "#C9A227" }}>
            {totalItems > 9 ? "9+" : totalItems}
          </span>
        )}
      </button>
    </header>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
    </svg>
  );
}
