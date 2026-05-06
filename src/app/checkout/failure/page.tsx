import Link from "next/link";
import { FrownIcon } from "@/components/Icons";

export default function FailurePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center"
      style={{ backgroundColor: "#faf6ee" }}>
      <FrownIcon className="h-16 w-16" style={{ color: "#5C0A14" } as React.CSSProperties} />
      <h1 className="text-2xl font-black" style={{ color: "#5C0A14" }}>El pago no se completó</h1>
      <p className="max-w-xs" style={{ color: "#7a5a5e" }}>
        Podés intentarlo de nuevo o contactarnos por WhatsApp para coordinar otro método de pago.
      </p>
      <Link href="/checkout" className="mt-2 rounded-2xl px-6 py-3 font-bold"
        style={{ backgroundColor: "#5C0A14", color: "#C9A227" }}>
        Reintentar pago
      </Link>
      <Link href="/" className="text-sm underline" style={{ color: "#7a5a5e" }}>
        Volver a la tienda
      </Link>
    </main>
  );
}
