import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center"
      style={{ backgroundColor: "#faf6ee" }}>
      <span className="text-7xl">🎉</span>
      <h1 className="text-2xl font-black" style={{ color: "#5C0A14" }}>¡Pago aprobado!</h1>
      <p className="max-w-xs" style={{ color: "#7a5a5e" }}>
        Recibimos tu pedido. Te vamos a contactar por WhatsApp para coordinar la entrega.
      </p>
      <p className="text-sm font-semibold" style={{ color: "#5C0A14" }}>
        Gracias por elegirnos 💛
      </p>
      <Link href="/" className="mt-2 rounded-2xl px-6 py-3 font-bold"
        style={{ backgroundColor: "#5C0A14", color: "#C9A227" }}>
        Seguir comprando
      </Link>
    </main>
  );
}
