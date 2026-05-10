import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import {
  CalendarIcon,
  ChefHatIcon,
  HeartIcon,
  TimerIcon,
  CheckIcon,
  CertificateIcon,
  SparkleIcon,
  ChartIcon,
  WhatsAppIcon,
  MailIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Alianzas Comerciales | Gustazo",
  description:
    "Sumá productos sin gluten a la carta de tu bar, restaurante o café. Modelo simple, productos congelados que duran, capacitación al equipo y compra directa de fábrica.",
};

const WA_NUMBER = "5493516632462";
const EMAIL = "glutenfree.gustazo@gmail.com";

const WA_TEXT = encodeURIComponent(
  "Hola Gustazo! Tengo un bar/restaurante/café y quiero agendar una llamada para ver cómo podemos sumar productos sin gluten a la carta. Te cuento brevemente:\n\n" +
    "· Tipo de negocio:\n" +
    "· Cuántos cubiertos por día (aprox):\n" +
    "· Mejor horario para hablar:"
);

const EMAIL_SUBJECT = encodeURIComponent("Alianza comercial — Quiero agendar una llamada");
const EMAIL_BODY = encodeURIComponent(
  "Hola Gustazo!\n\n" +
    "Tengo un bar/restaurante/café y quiero agendar una llamada para ver cómo trabajar juntos.\n\n" +
    "Tipo de negocio:\n" +
    "Cubiertos diarios (aprox):\n" +
    "Mejor horario para hablar:\n\n" +
    "Gracias!"
);

export default function AlianzasPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#5C0A14", minHeight: "320px" }}
        >
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C9A227" }}
            >
              Alianzas comerciales
            </p>
            <h1
              className="text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl"
              style={{ color: "#fff" }}
            >
              Sumá sin gluten a tu carta.<br />Sin reniegos. Con más ventas.
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Para bares, restaurantes, cafés y hoteles que quieren incluir a
              todas las personas en la mesa — sin resignar sabor ni complicar
              la operación.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* DOLOR — lo que pasa hoy */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Lo que pasa hoy
          </p>
          <h2
            className="mb-10 text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Sabemos cómo es la cocina de un bar.
          </h2>

          <div className="space-y-3">
            {[
              "Tu equipo está al palo, y cualquier cosa “extra” se reniega.",
              "Sumás opciones SG con buena onda… y a las dos semanas se vencen, se ponen duros, terminan en la basura.",
              "Los celíacos llegan, no encuentran nada que se vea rico, y se van a otro lado.",
              "Pierden ese cliente — y a las 4, 5 o 20 personas que iban a venir con él.",
            ].map((line) => (
              <p
                key={line}
                className="flex items-start gap-3 text-base leading-relaxed"
                style={{ color: "#1a0a0c" }}
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#C9A227" }}
                />
                <span>{line}</span>
              </p>
            ))}
          </div>

          <p className="mt-10 text-lg leading-relaxed" style={{ color: "#5C0A14", fontWeight: 600 }}>
            Hay una forma de cambiar esto sin reinventar tu cocina.
          </p>
        </section>

        {/* OPORTUNIDAD — números del mercado */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              La oportunidad real
            </p>
            <h2
              className="mb-12 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#5C0A14" }}
            >
              El mercado está, y casi nadie lo está atendiendo bien.
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  big: "400.000",
                  unit: "personas",
                  text: "en la Ciudad de Córdoba reducen o evitan el gluten — celíacos, sensibles y por elección.",
                },
                {
                  big: "14,5 M",
                  unit: "en Argentina",
                  text: "tomando el mismo 30% de población que reduce o evita el gluten a nivel país.",
                },
                {
                  big: "1 → 20",
                  unit: "personas",
                  text: "Una sola persona celíaca define dónde se reúnen 4, 5 o hasta 20 personas en un festejo.",
                },
              ].map((stat) => (
                <div
                  key={stat.big}
                  className="p-6"
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <p
                    className="mb-1 text-4xl font-bold leading-none md:text-5xl"
                    style={{ color: "#5C0A14" }}
                  >
                    {stat.big}
                  </p>
                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#C9A227" }}
                  >
                    {stat.unit}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-6"
              style={{ backgroundColor: "#5C0A14", borderRadius: "8px", color: "#fff" }}
            >
              <p className="text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.92)" }}>
                Cuando una persona con celiaquía encuentra un lugar seguro
                para comer, vuelve con frecuencia y trae acompañantes. Es un
                público fiel, agradecido y que elige los lugares donde se
                sienten cuidados.
              </p>
            </div>
          </div>
        </section>

        {/* MODELO — cómo funciona */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Nuestro modelo
          </p>
          <h2
            className="mb-12 text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Simple, validado por bares con +2 años trabajando con nosotros.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                Icon: CalendarIcon,
                title: "Productos congelados",
                text: "Los congelamos apenas salen del horno, todavía tibios. Cero desperdicio: sacás solo lo que necesitás. Listos en menos de 5 minutos. La experiencia del cliente: como recién horneados.",
              },
              {
                Icon: ChefHatIcon,
                title: "Capacitación al equipo, incluida",
                text: "Una bromatóloga especializada va a tu cocina. Adaptamos los procesos al espacio que ya tenés. Dejamos carteles autoadhesivos con los pasos y un video con QR para los nuevos ingresos. Capacitación automatizada.",
              },
              {
                Icon: HeartIcon,
                title: "Soporte humano y directo",
                text: "Tenés un contacto directo, sin intermediarios. Si surge una duda o un reclamo, respondemos rápido. Coordinamos visitas o videollamadas si hace falta. No te dejamos tirado después de la venta.",
              },
              {
                Icon: TimerIcon,
                title: "Compra directa de fábrica",
                text: "Sin distribuidores, sin comisiones, sin margen inflado. Precio final más bajo con calidad premium. Factura C o condiciones específicas, las resolvemos en el momento. Retiro en Alta Córdoba o coordinás logística.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-6"
                style={{ backgroundColor: "#faf6ee", borderRadius: "8px" }}
              >
                <p.Icon className="mb-4 h-9 w-9" style={{ color: "#C9A227" }} />
                <h3 className="mb-2 text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CALIDAD VALIDADA */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
              Calidad validada
            </p>
            <h2
              className="mb-10 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#5C0A14" }}
            >
              No es “una opción sin gluten más”.
            </h2>

            <div className="space-y-5">
              {[
                {
                  Icon: SparkleIcon,
                  title: "Formación internacional",
                  text: "Nos capacitamos en Francia, España, Italia, Inglaterra, Polonia y Brasil con los últimos avances en panadería sin gluten. Trajimos esas técnicas a Argentina y las adaptamos a nuestra cultura gastronómica.",
                },
                {
                  Icon: CheckIcon,
                  title: "Ingredientes premium",
                  text: "Seleccionados de Colombia, India, Pakistán, España y Filipinas. Eso permite lograr la textura, sabor y digestibilidad que nos diferencia.",
                },
                {
                  Icon: CertificateIcon,
                  title: "Certificado RNE 04006318",
                  text: "Establecimiento elaborador certificado por ANMAT. Cada producto con su RNPA. Bolsas reforzadas aptas para microondas que también funcionan como barrera contra contaminación cruzada.",
                },
                {
                  Icon: HeartIcon,
                  title: "Validación real de bares",
                  text: "La prueba más honesta no la damos nosotros: la dan las reseñas de Google Maps y los bares que llevan más de dos años eligiéndonos. Podemos pasarte referencias para que hables directo con ellos.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <item.Icon
                    className="mt-1 h-7 w-7 shrink-0"
                    style={{ color: "#C9A227" }}
                  />
                  <div>
                    <p
                      className="mb-1 text-base font-semibold uppercase tracking-wide"
                      style={{ color: "#5C0A14" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROPUESTA DE PRODUCTOS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Línea básica
          </p>
          <h2
            className="mb-4 text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Para empezar sin complicar la operación.
          </h2>
          <p className="mb-12 max-w-3xl text-base leading-relaxed" style={{ color: "#7a5a5e" }}>
            Una selección estratégica para sumar a tu carta — productos
            seguros, sabrosos y con buena rotación. Después podés ampliar con
            el resto del catálogo según tu público.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Pan de Campo", text: "Corteza crujiente, miga aireada. Tostadas, sándwiches gourmet, sopas." },
              { name: "Prepizza", text: "Estilo americano, alvéolos grandes y bordes crocantes. Lista para hornear." },
              { name: "Pan de Hamburguesa", text: "Miga suave que no se rompe, con semillas de lino. Ideal para burgers premium." },
              { name: "Pan de Lomo", text: "Más grande, miga firme y corteza artesanal. Perfecto para lomitos cordobeses." },
              { name: "Pan Árabe", text: "Fino, esponjoso y versátil. Wraps, sándwiches fríos o calientes." },
              { name: "Pan de Mesa (bollito)", text: "Toque dulce y corteza rústica. Ideal para acompañar entradas." },
              { name: "Budines variados", text: "Textura súper húmeda. Vainilla, chocolate, mandarina, coco, limón." },
              { name: "Alfajores de maicena", text: "Masa suave, dulce de leche cremoso, coco. Balance justo." },
              { name: "Cookies estilo NY", text: "Crocantes por fuera, húmedas por dentro. Vainilla con chips, red velvet, naranja-choco." },
            ].map((p) => (
              <div
                key={p.name}
                className="p-5"
                style={{ backgroundColor: "#faf6ee", borderRadius: "8px" }}
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "#5C0A14" }}
                >
                  {p.name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm italic" style={{ color: "#7a5a5e" }}>
            La lista de precios mayorista la pasamos en la primera llamada,
            según tu volumen estimado.
          </p>
        </section>

        {/* CRECIMIENTO CONJUNTO — redes */}
        <section style={{ backgroundColor: "#5C0A14", color: "#fff" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C9A227" }}
            >
              Crecimiento conjunto
            </p>
            <h2
              className="mb-10 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#fff" }}
            >
              Te potenciamos en redes — comunidad real, no seguidores comprados.
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  big: "22.400",
                  text: "seguidores orgánicos en @gustazo.glutenfree",
                },
                {
                  big: "+107 K",
                  text: "visualizaciones en los últimos 30 días",
                },
                {
                  big: "2.300",
                  text: "interacciones mensuales con comunidad fiel",
                },
              ].map((stat) => (
                <div
                  key={stat.big}
                  className="p-6"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    className="mb-2 text-4xl font-bold leading-none md:text-5xl"
                    style={{ color: "#C9A227" }}
                  >
                    {stat.big}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  Icon: ChartIcon,
                  title: "Lanzamiento conjunto",
                  text: "Anunciamos la alianza en redes con contenido que se comparte y trae visitas reales.",
                },
                {
                  Icon: SparkleIcon,
                  title: "Menú GF destacado",
                  text: "Te ayudamos a diseñar la sección sin gluten de tu carta para que se vea profesional.",
                },
                {
                  Icon: HeartIcon,
                  title: "Combos y promociones",
                  text: "Campañas para celíacos y sus acompañantes, con motivos para venir y volver.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.Icon className="mt-1 h-6 w-6 shrink-0" style={{ color: "#C9A227" }} />
                  <div>
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wide" style={{ color: "#fff" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — agendar llamada */}
        <section style={{ backgroundColor: "#faf6ee" }}>
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C9A227" }}
            >
              Próximos pasos
            </p>
            <h2
              className="mb-6 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#5C0A14" }}
            >
              Coordinemos una llamada de 20 minutos.
            </h2>
            <p
              className="mb-10 text-base leading-relaxed md:text-lg"
              style={{ color: "#1a0a0c" }}
            >
              Te escuchamos primero — qué vendés, qué te falta, qué clientes
              querés atender. Después armamos una propuesta a medida, con
              productos, precios y capacitación. Si después de hablar no tiene
              sentido, no pasa nada.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wide transition active:scale-95"
                style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "8px" }}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar por WhatsApp
              </a>

              <a
                href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wide border-2 transition active:scale-95"
                style={{ borderColor: "#5C0A14", color: "#5C0A14", borderRadius: "8px" }}
              >
                <MailIcon className="h-5 w-5" />
                Agendar por email
              </a>
            </div>

            <p className="mt-6 text-xs italic" style={{ color: "#7a5a5e" }}>
              Te respondemos en menos de 24 horas hábiles.
            </p>

            <p className="mt-12 text-sm" style={{ color: "#7a5a5e" }}>
              ¿Querés ver primero cómo nos presentamos a un bar?{" "}
              <Link
                href="/contacto"
                className="underline underline-offset-2 hover:opacity-80"
                style={{ color: "#5C0A14" }}
              >
                Pedinos un ejemplo de propuesta personalizada →
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
