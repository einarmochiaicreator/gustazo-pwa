import { CertificateIcon } from "@/components/Icons";

const ANMAT_ALG_URL = "https://listado.anmat.gob.ar/alg/";

export default function SafetyProof() {
  return (
    <section style={{ backgroundColor: "#faf6ee" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-3 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#5C0A14" }}
        >
          Lo que hay detrás de cada bolsita.
        </h2>
        <p className="mb-12 text-base" style={{ color: "#7a5a5e" }}>
          La trazabilidad y los registros, a la mano.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bloque 1 — Certificado */}
          <article className="p-6" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 flex h-40 items-center justify-center" style={{ backgroundColor: "#faf6ee" }}>
              {/* TODO: reemplazar por <Image> con /assets/certificados/rne.jpg */}
              <CertificateIcon className="h-14 w-14" style={{ color: "#5C0A14", opacity: 0.4 }} />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              R.N.E. 04006318
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Establecimiento elaborador certificado por ANMAT.
            </p>
          </article>

          {/* Bloque 2 — RNPA */}
          <article className="p-6" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 flex h-40 items-center justify-center" style={{ backgroundColor: "#faf6ee" }}>
              {/* TODO: galería de R.N.P.A. en /assets/certificados/ */}
              <CertificateIcon className="h-14 w-14" style={{ color: "#5C0A14", opacity: 0.4 }} />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Cada producto, registrado
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Cada producto con su Registro Nacional de Producto Alimenticio.
            </p>
          </article>

          {/* Bloque 3 — ANMAT */}
          <article className="p-6 flex flex-col" style={{ backgroundColor: "#fff" }}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Buscanos en ANMAT
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Estamos en el listado oficial de ANMAT. Buscanos — y de paso fijate
              qué otras marcas están y cuáles no.
            </p>
            <a
              href={ANMAT_ALG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start px-4 py-2 text-xs font-bold uppercase tracking-wide transition active:scale-95"
              style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
            >
              Ir al Listado ALG →
            </a>
          </article>

          {/* Bloque 4 — Cómo es nuestro espacio */}
          <article className="p-6 md:col-span-2" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 grid grid-cols-3 gap-2">
              {/* TODO: 3 fotos del local en /assets/local/ */}
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-square" style={{ backgroundColor: "#faf6ee" }} />
              ))}
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Cómo es nuestro espacio
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Espacio 100% libre de gluten. Acero inoxidable, controles de lote,
              y trazabilidad desde la materia prima hasta tu casa.
            </p>
          </article>

          {/* Bloque 5 — CAPALIGLU */}
          <article className="p-6 flex flex-col items-start" style={{ backgroundColor: "#fff" }}>
            <div className="mb-4 flex h-20 w-full items-center justify-center" style={{ backgroundColor: "#faf6ee" }}>
              {/* TODO: logo CAPALIGLU en /assets/logos/ */}
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#5C0A14", opacity: 0.5 }}>
                CAPALIGLU
              </span>
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Socios activos
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
              Somos socios activos de la Cámara Argentina de Productores
              de Alimentos Libres de Gluten.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
