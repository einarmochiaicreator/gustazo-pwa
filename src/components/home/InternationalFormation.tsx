import InternationalMap from "./InternationalMap";

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
            Nos asesoramos, invertimos mucho para formarnos con los mejores
            panaderos del mundo. En ese contexto nos relacionamos con otros
            emprendedores y empresarios, aprendiendo de los que ya la hicieron
            bien — de panaderos como nosotros hasta dueños de las cadenas sin
            gluten más reconocidas de Europa.
          </p>

          <p className="text-base leading-relaxed" style={{ color: "#1a0a0c" }}>
            Volvimos a Córdoba. Estudiamos, probamos, ajustamos hasta encontrar
            el punto para hacerlo acá, con nuestras manos.
          </p>
        </div>

        <div className="w-full">
          <InternationalMap />
        </div>
      </div>
    </section>
  );
}
