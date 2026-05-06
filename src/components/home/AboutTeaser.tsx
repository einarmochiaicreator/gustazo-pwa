import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "#1a0a0c" }}>
        Empezamos Gustazo porque uno de nosotros es celíaco desde los 2 años.
        Durante años buscamos pan, pizza y dulces que estuvieran a la altura
        — y como no aparecían, los empezamos a hacer nosotros.
      </p>

      <Link
        href="/quienes-somos"
        className="mt-8 inline-block text-sm font-semibold uppercase tracking-widest transition hover:underline"
        style={{ color: "#5C0A14", textDecorationColor: "#C9A227", textUnderlineOffset: "4px" }}
      >
        Conocé nuestra historia →
      </Link>
    </section>
  );
}
