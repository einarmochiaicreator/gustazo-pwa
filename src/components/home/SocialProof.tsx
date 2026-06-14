import Carousel3D, { type Carousel3DSlide } from "@/components/Carousel3D";

// TODO: capturas reales en /assets/whatsapp/
const WHATSAPP_PLACEHOLDERS = [1, 2, 3, 4, 5];

interface GoogleReview {
  id: string;
  name: string;
  initial: string;
  avatarColor: string;
  meta: string;
  when: string;
  text: string;
}

const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "elida",
    name: "Elida Agüero",
    initial: "E",
    avatarColor: "#3B7AF7",
    meta: "Local Guide · 11 opiniones · 3 fotos",
    when: "Hace un año",
    text: "Exquisito todo lo que elaboran, logran muy buenos sabores desde el pan rústico hasta los budines. Rico, saludable y muy buena atención es lo que se recibe al probar la experiencia Gustazo Gluten Free.",
  },
  {
    id: "maria-pia",
    name: "Maria Pia Peralta Salles",
    initial: "M",
    avatarColor: "#D946C9",
    meta: "5 opiniones · 1 foto",
    when: "Hace 6 meses",
    text: "Uno de mis lugares favoritos sin gluten! El pan de lomo es lo más rico !! Y ni te digo el pan rallado, se siente como si fuera uno de panadería con gluten! Amooo comer, y me brindaron productos riquísimos para ni extrañar la comida con gluten! La atención es genial también! Súper buena onda! Gracias chicos 💖💖💖💖",
  },
  {
    id: "paula",
    name: "Paula Catrambone",
    initial: "P",
    avatarColor: "#7C7C8E",
    meta: "9 opiniones",
    when: "Editado hace un año",
    text: "Lo más rico que he probado !!! Y sobre todo la calidad humana de los chicos que ponen todo cada día!! Lo recomiendo no se va arrepentir 🤗...",
  },
  {
    id: "carina",
    name: "Carina Bracamonte",
    initial: "C",
    avatarColor: "#3F4754",
    meta: "5 opiniones",
    when: "Hace 2 años",
    text: "Los productos gustazo son la EXCELENCIA ...seguramente NO encontrarán algo ni parecido....las pizas ..los panes árabes....el pan de campo lo mejor de lo mejor...ni hablar de los budines....siempre con uds Gustazo.",
  },
  {
    id: "gaston",
    name: "gaston sejas",
    initial: "g",
    avatarColor: "#7C5CC4",
    meta: "2 opiniones",
    when: "Hace 2 años",
    text: "La primera vez que como una pizza sin gluten que no tiene nada que envidiar a una con gluten, ya sea en sabor y cocción. Super recomendable y voy a seguir comprando desde Buenos Aires.",
  },
  {
    id: "mario",
    name: "Mario Paredes (Marito)",
    initial: "M",
    avatarColor: "#3B7AF7",
    meta: "Local Guide · 33 opiniones · 1.082 fotos",
    when: "Hace un año",
    text: "Principalmente, excelente atención. Variedad de productos, ricos sin lugar a duda. Muy buenos precios. Pulcritud y salubridad al 100%.",
  },
  {
    id: "anabel",
    name: "Anabel Mealla",
    initial: "A",
    avatarColor: "#5C8C3F",
    meta: "Local Guide · 72 opiniones · 195 fotos",
    when: "Hace un año",
    text: "Conocí el lugar por Instagram, me comunique le conté mi situación q recién estoy incursionando en los alimentos sin gluten y tuve una muy buena asesoría y luego de probar quede encantada. Super recomendable.",
  },
  {
    id: "meel",
    name: "Meel Cort.",
    initial: "M",
    avatarColor: "#8E6B47",
    meta: "Local Guide · 19 opiniones · 2 fotos",
    when: "Hace un año",
    text: "Tremenda combinación de sabores, realmente exquisito el producto, algo muy bien terminado, sabor, humedad, es casi un postre. Realmente sorprendido al probar este producto.",
  },
  {
    id: "rodrigo",
    name: "Rodrigo Acosta",
    initial: "R",
    avatarColor: "#4F7DC2",
    meta: "Local Guide · 101 opiniones · 53 fotos",
    when: "Hace 2 años",
    text: "Los mejores productos de panificación apto celíacos por lejos! Las pizzas un 10, el pan de campo no puede más, los panes para hamburguesas, panchos y árabes no se pueden creer! Los budines, ricazos! Son unos genios! Todo súper cuidado y la presentación impecable! A seguir creciendo Gustazo!!! 🤛🏼🤛🏼🤛🏼",
  },
];

const whatsappSlides: Carousel3DSlide[] = WHATSAPP_PLACEHOLDERS.map((i) => ({
  id: `wa-${i}`,
  content: (
    <div
      className="flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#faf6ee",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(60,4,14,0.15)",
      }}
    >
      <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#5C0A14", opacity: 0.4 }}>
        WhatsApp #{i}
      </span>
    </div>
  ),
}));

const googleSlides: Carousel3DSlide[] = GOOGLE_REVIEWS.map((r) => ({
  id: r.id,
  content: (
    <div
      className="flex h-full w-full flex-col p-6 overflow-hidden"
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(60,4,14,0.12)",
      }}
    >
      {/* Header: avatar + nombre + meta */}
      <div className="mb-3 flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center text-base font-semibold text-white"
          style={{ backgroundColor: r.avatarColor, borderRadius: "999px" }}
        >
          {r.initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold" style={{ color: "#202124" }}>
            {r.name}
          </p>
          <p className="truncate text-xs" style={{ color: "#70757a" }}>
            {r.meta}
          </p>
        </div>
      </div>

      {/* Estrellas + cuándo */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm tracking-tight" style={{ color: "#F9AB00" }}>★★★★★</span>
        <span className="text-xs" style={{ color: "#70757a" }}>{r.when}</span>
      </div>

      {/* Texto */}
      <p className="text-sm leading-relaxed" style={{ color: "#202124" }}>
        {r.text}
      </p>
    </div>
  ),
}));

export default function SocialProof() {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="mb-12 text-3xl font-semibold uppercase tracking-wide md:text-4xl"
          style={{ color: "#5C0A14" }}
        >
          Lo que nos dicen.
        </h2>

        {/* Carrusel 1 — WhatsApp */}
        <div className="mb-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Mensajes que recibimos
          </p>
          <Carousel3D slides={whatsappSlides} slideWidth={260} slideHeight={420} />
        </div>

        {/* Carrusel 2 — Google Maps reviews */}
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A227" }}>
            Reseñas en Google
          </p>
          <Carousel3D slides={googleSlides} slideWidth={360} slideHeight={340} />
        </div>
      </div>
    </section>
  );
}
