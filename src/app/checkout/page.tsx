"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

type DeliveryMode = "retiro" | "delivery";

interface FormData {
  name: string;
  phone: string;
  email: string;
  delivery: DeliveryMode;
  address: string;
  notes: string;
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    delivery: "retiro",
    address: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ product, quantity }) => ({
            id: product.id,
            title: product.name,
            unit_price: product.price,
            quantity,
          })),
          payer: {
            name: form.name,
            email: form.email,
            phone: form.phone,
          },
          delivery: form.delivery,
          address: form.address,
          notes: form.notes,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Error al procesar el pago");
      }

      const { init_point } = await res.json();
      clearCart();
      window.location.href = init_point;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
        style={{ backgroundColor: "#faf6ee" }}>
        <svg className="h-16 w-16 opacity-20" viewBox="0 0 24 24" fill="none" stroke="#5C0A14" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
        </svg>
        <h1 className="text-2xl font-bold" style={{ color: "#5C0A14" }}>Tu carrito está vacío</h1>
        <p style={{ color: "#7a5a5e" }}>Volvé a la tienda y elegí tus productos.</p>
        <Link href="/" className="mt-2 rounded-2xl px-6 py-3 font-bold transition"
          style={{ backgroundColor: "#5C0A14", color: "#C9A227" }}>
          Ver productos
        </Link>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: "#faf6ee", minHeight: "100vh" }}>
      {/* Header simple */}
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#5C0A14" }}>
        <Link href="/" className="rounded-full p-1.5 transition hover:bg-white/10" aria-label="Volver">
          <BackIcon className="h-5 w-5 text-white" />
        </Link>
        <h1 className="font-bold" style={{ color: "#C9A227" }}>Finalizar pedido</h1>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-6 space-y-6">
        {/* Resumen del pedido */}
        <section className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: "#fff" }}>
          <div className="px-5 py-3 font-bold text-sm" style={{ backgroundColor: "#f0e8d6", color: "#5C0A14" }}>
            Resumen del pedido
          </div>
          <ul className="divide-y" style={{ borderColor: "#f0e8d6" }}>
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#5C0A14" }}>{product.name}</p>
                  <p className="text-xs" style={{ color: "#7a5a5e" }}>x{quantity}</p>
                </div>
                <span className="text-sm font-bold" style={{ color: "#5C0A14" }}>
                  {formatPrice(product.price * quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between px-5 py-3 font-black text-base border-t"
            style={{ borderColor: "#f0e8d6", color: "#5C0A14" }}>
            <span>Total</span>
            <span style={{ color: "#C9A227" }}>{formatPrice(totalPrice)}</span>
          </div>
        </section>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <section className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: "#fff" }}>
            <div className="px-5 py-3 font-bold text-sm" style={{ backgroundColor: "#f0e8d6", color: "#5C0A14" }}>
              Tus datos
            </div>
            <div className="px-5 py-4 space-y-4">
              <Field label="Nombre completo *" required>
                <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)}
                  className="input-field" placeholder="Ej: María González" />
              </Field>
              <Field label="WhatsApp / Teléfono *" required>
                <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)}
                  className="input-field" placeholder="Ej: 351 555 1234" />
              </Field>
              <Field label="Email *" required>
                <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                  className="input-field" placeholder="Ej: maria@email.com" />
              </Field>
            </div>
          </section>

          <section className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: "#fff" }}>
            <div className="px-5 py-3 font-bold text-sm" style={{ backgroundColor: "#f0e8d6", color: "#5C0A14" }}>
              Modalidad de entrega
            </div>
            <div className="px-5 py-4 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="radio" name="delivery" value="retiro"
                  checked={form.delivery === "retiro"}
                  onChange={() => update("delivery", "retiro")}
                  className="mt-0.5 accent-bordo" />
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#5C0A14" }}>Retiro en local</p>
                  <p className="text-xs" style={{ color: "#7a5a5e" }}>Te avisamos cuando está listo por WhatsApp</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="radio" name="delivery" value="delivery"
                  checked={form.delivery === "delivery"}
                  onChange={() => update("delivery", "delivery")}
                  className="mt-0.5 accent-bordo" />
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#5C0A14" }}>Delivery / Envío</p>
                  <p className="text-xs" style={{ color: "#7a5a5e" }}>Córdoba capital y envíos a todo el país</p>
                </div>
              </label>

              {form.delivery === "delivery" && (
                <Field label="Dirección de entrega *" required>
                  <input type="text" required value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    className="input-field" placeholder="Calle, número, localidad" />
                </Field>
              )}
            </div>
          </section>

          <section className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: "#fff" }}>
            <div className="px-5 py-4">
              <Field label="Notas u observaciones (opcional)">
                <textarea rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)}
                  className="input-field resize-none"
                  placeholder="Ej: sin maní, entregar entre las 18 y 20 hs, etc." />
              </Field>
            </div>
          </section>

          {error && (
            <div className="rounded-xl px-4 py-3 text-sm font-semibold"
              style={{ backgroundColor: "#fde8e8", color: "#c0392b" }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl py-4 text-base font-black shadow-md transition active:scale-[0.98] disabled:opacity-60"
            style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
          >
            {loading ? "Procesando..." : `Pagar ${formatPrice(totalPrice)} →`}
          </button>

          <p className="text-center text-xs" style={{ color: "#7a5a5e" }}>
            Pago seguro procesado por MercadoPago
          </p>
        </form>
      </div>

      <style jsx global>{`
        .input-field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1.5px solid #e0d4c0;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: #1a0a0c;
          background: #faf6ee;
          outline: none;
          transition: border-color 0.15s;
        }
        .input-field:focus {
          border-color: #5C0A14;
        }
      `}</style>
    </main>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold" style={{ color: "#5C0A14" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function BackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
