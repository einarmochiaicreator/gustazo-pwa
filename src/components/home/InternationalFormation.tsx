export default function InternationalFormation() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2
            className="mb-6 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Formación internacional,<br />producción local.
          </h2>

          <p className="mb-4 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
            Nos formamos con los mejores panaderos del mundo.
          </p>

          <p className="mb-4 text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
            Viajamos a Francia, Italia, España, Inglaterra, Polonia y Alemania.
            Estudiamos, probamos, ajustamos hasta encontrar el punto.
          </p>

          <p className="text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
            Después volvimos a Córdoba a hacerlo acá, con nuestras manos.
          </p>
        </div>

        <div
          className="relative aspect-[4/3] w-full overflow-hidden"
          style={{ backgroundColor: "#faf6ee" }}
        >
          {/* TODO: foto de formación en /assets/formacion/ */}
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#5C0A14", opacity: 0.4 }}>
              Foto de formación
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
