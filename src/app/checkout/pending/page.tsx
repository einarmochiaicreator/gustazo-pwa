import Link from "next/link";

export default function PendingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center"
      style={{ backgroundColor: "#faf6ee" }}>
      <span className="text-7xl">⏳</span>
      <h1 className="text-2xl font-black" style={{ color: "#5C0A14" }}>Pago pendiente</h1>
      <p className="max-w-xs" style={{ color: "#7a5a5e" }}>
        Tu pago está siendo procesado. Te avisamos por WhatsApp cuando se confirme.
      </p>
      <Link href="/" className="mt-2 rounded-2xl px-6 py-3 font-bold"
        style={{ backgroundColor: "#5C0A14", color: "#C9A227" }}>
        Volver a la tienda
      </Link>
    </main>
  );
}
