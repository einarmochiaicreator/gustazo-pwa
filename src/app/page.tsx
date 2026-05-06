import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-16 text-center">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-verde-100 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-8rem] h-96 w-96 rounded-full bg-verde-200 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[15%] h-64 w-64 -translate-x-1/2 rounded-full bg-verde-50 opacity-50 blur-3xl" />

      {/* Logo */}
      <div className="relative mb-8 h-52 w-52">
        <Image
          src="/logo-gustazo.png"
          alt="Gustazo Gluten Free"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Divider */}
      <div className="mb-8 h-px w-12 bg-verde-200" />

      {/* Coming soon */}
      <div className="mb-10 space-y-4">
        <p className="text-3xl font-bold text-ink">Próximamente</p>
        <div className="mx-auto max-w-xs space-y-1 leading-relaxed text-ink-muted">
          <p>Especialistas en productos SIN GLUTEN</p>
          <p>R.N.E.: 04006318</p>
          <p>Cursos de formulación ALG (Proximamente)</p>
          <p>Cursos de cocina ALG para niños (Proximamente)</p>
        </div>
      </div>

      {/* CTA principal */}
      <a
        href="https://gustazo-link-in-bio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl bg-verde-500 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:bg-verde-400 active:scale-[0.98]"
      >
        <StoreIcon className="h-6 w-6" />
        Conocenos
      </a>


      {/* Footer hint */}
      <p className="absolute bottom-6 text-xs text-ink-muted opacity-60">
        Hecho con cariño en Córdoba
      </p>
    </main>
  );
}

function StoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

