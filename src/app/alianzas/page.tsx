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
    "Sumá clientes y ampliá el ticket promedio incorporando productos sin gluten a la carta de tu bar, restaurante o café. Modelo simple, congelados que duran, capacitación incluida y compra directa de fábrica.",
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
              Más clientes.<br />Ticket más alto.<br />Sin complicar la operación.
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Para bares, restaurantes, cafés y hoteles que quieren incluir
              a todas las personas en la mesa — sin resignar sabor ni
              rentabilidad.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </section>

        {/* DOLOR — lo que pasa hoy (más profesional) */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            El contexto
          </p>
          <h2
            className="mb-10 text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: "#5C0A14" }}
          >
            Conocemos los desafíos del rubro.
          </h2>

          <div className="space-y-4">
            {[
              "Tu equipo trabaja al límite. Cualquier proceso adicional genera fricción y errores operativos.",
              "Las opciones sin gluten convencionales tienen baja rotación: se vencen, se secan o se descartan. El resultado es merma y pérdida directa de margen.",
              "El cliente celíaco que no encuentra una propuesta atractiva no vuelve. Con él se pierde, además, el grupo que lo acompañaba.",
              "Una sola persona con restricción alimentaria define dónde se reúnen 4, 5 o hasta 20 personas. Cada decisión perdida representa un grupo completo.",
              "Cumplir con la Ley 27.196 sin una propuesta diferenciada termina siendo un costo, no una ventaja competitiva.",
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
            Hay un modelo que resuelve todo esto sin reinventar tu cocina.
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
              El mercado está. Casi nadie lo está atendiendo bien.
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
                  text: "tomando el mismo 30% de la población a nivel país. Un mercado en crecimiento sostenido.",
                },
                {
                  big: "1 → 20",
                  unit: "personas",
                  text: "Una persona celíaca puede definir dónde se reúnen 4, 5 o hasta 20 personas en un festejo.",
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
            Simple, validado por bares con +3 años trabajando con nosotros.
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
                title: "Te enseñamos a tu equipo. Te lo dejamos funcionando.",
                text: "Capacitación básica incluida: vamos a tu cocina, ajustamos los procesos al espacio que ya tenés, dejamos carteles con los pasos clave y un video con QR para los nuevos ingresos. Si necesitás algo más profundo, tenés disponible el servicio profesional con bromatóloga especializada — certificación firmada incluida.",
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
                  title: "+3 años trabajando con bares y cadenas",
                  text: "Cadenas como Bonafide y muchos otros bares y cafeterías llevan más de 3 años eligiéndonos. La prueba más honesta no la damos nosotros: la dan las reseñas de Google Maps y los clientes que vuelven. Te pasamos referencias para que hables directo con ellos.",
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

        {/* CRECIMIENTO CONJUNTO — redes con stats reales actualizados */}
        <section style={{ backgroundColor: "#5C0A14", color: "#fff" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C9A227" }}
            >
              Crecimiento conjunto
            </p>
            <h2
              className="mb-4 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#fff" }}
            >
              Te potenciamos en redes — comunidad real, no seguidores comprados.
            </h2>
            <p
              className="mb-12 max-w-3xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Estos son nuestros números de los últimos 90 días. No vendemos
              alcance: lo demostramos.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  big: "+26 K",
                  text: "seguidores orgánicos en @gustazo.glutenfree",
                },
                {
                  big: "~1 M",
                  text: "visualizaciones en los últimos 90 días",
                },
                {
                  big: "+8.900",
                  text: "cuentas únicas que interactúan con nuestro contenido",
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

            <div
              className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {[
                { n: "9.212", l: "Alcance promedio/post" },
                { n: "6.800", l: "Compartidos en 90 días" },
                { n: "2.877", l: "Veces guardado" },
                { n: "270", l: "Likes promedio/post" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="px-3 py-3 text-center"
                  style={{
                    backgroundColor: "rgba(201,162,39,0.10)",
                    borderRadius: "6px",
                  }}
                >
                  <p className="text-lg font-bold leading-none" style={{ color: "#C9A227" }}>
                    {s.n}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {s.l}
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
