import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#5C0A14",
        backgroundImage: "url('/hero-gustazo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "440px",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.72)" }} />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 pb-24">
        <h1
          className="mb-4 text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl"
          style={{ color: "#fff" }}
        >
          Sin gluten,<br />sin drama.
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.9)" }}>
          Especialistas en productos para celíacos.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/tienda"
            className="px-7 py-3 text-sm font-bold uppercase tracking-wide transition active:scale-95"
            style={{ backgroundColor: "#C9A227", color: "#5C0A14", borderRadius: "3px" }}
          >
            Ver productos →
          </Link>
          <Link
            href="/quienes-somos"
            className="px-7 py-3 text-sm font-semibold uppercase tracking-wide border transition active:scale-95"
            style={{ borderColor: "rgba(255,255,255,0.7)", color: "#fff", borderRadius: "3px" }}
          >
            Conocernos
          </Link>
        </div>

        <p className="mt-10 text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>
          Establecimiento elaborador certificado · R.N.E. 04006318
        </p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
