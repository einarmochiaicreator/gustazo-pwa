"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const NAV_ITEMS = [
  { label: "Quiénes somos", href: "/quienes-somos", soon: false },
  { label: "Tienda", href: "/", soon: false },
  { label: "Cursos", href: "/cursos", soon: true },
  { label: "Talleres", href: "/talleres", soon: true },
  { label: "Contacto", href: "/contacto", soon: false },
];

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header>
      {/* Top bar — redes sociales */}
      <div
        className="flex items-center gap-3 px-6 py-2"
        style={{ backgroundColor: "#3e0009" }}
      >
        <a
          href="https://www.instagram.com/gustazo.glutenfree"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="opacity-70 transition hover:opacity-100"
        >
          <InstagramIcon className="h-4 w-4 text-white" />
        </a>
        <a
          href="https://www.facebook.com/gustazoglutenfree"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="opacity-70 transition hover:opacity-100"
        >
          <FacebookIcon className="h-4 w-4 text-white" />
        </a>
      </div>

      {/* Main nav */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between gap-6 px-6 py-6"
        style={{ backgroundColor: "#5C0A14" }}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="relative h-12 w-12">
            <Image
              src="/logo-gustazo.png"
              alt="Gustazo Gluten Free"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative">
              <Link
                href={item.soon ? "#" : item.href}
                className="flex items-center gap-1 text-sm transition"
                style={{
                  color: isActive(item.href) ? "#C9A227" : "rgba(250,246,238,0.85)",
                  fontWeight: isActive(item.href) ? 600 : 400,
                }}
              >
                {item.label}
                {item.soon && (
                  <span
                    aria-hidden="true"
                    className="rounded px-1 py-0.5 text-[10px] font-bold"
                    style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
                  >
                    pronto
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Carrito + hamburguesa */}
        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative flex items-center gap-1.5 rounded px-3 py-2 text-sm font-semibold transition active:scale-95"
            style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
            aria-label="Ver carrito"
          >
            <CartIcon className="h-5 w-5" />
            {totalItems > 0 && (
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-black"
                style={{ backgroundColor: "#5C0A14", color: "#C9A227" }}
              >
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>

          {/* Hamburguesa mobile */}
          <button
            className="md:hidden rounded p-1 text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
          >
            <HamburgerIcon className="h-6 w-6" open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "#5C0A14", borderColor: "#7a1020" }}
        >
          <ul className="flex flex-col divide-y" style={{ borderColor: "#7a1020" }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.soon ? "#" : item.href}
                  className="flex items-center justify-between px-6 py-3 text-sm"
                  style={{ color: isActive(item.href) ? "#C9A227" : "rgba(250,246,238,0.85)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  {item.soon && (
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-bold"
                      style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
                    >
                      pronto
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function HamburgerIcon({ className, open }: { className?: string; open: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      {open ? (
        <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
      ) : (
        <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>
      )}
    </svg>
  );
}
