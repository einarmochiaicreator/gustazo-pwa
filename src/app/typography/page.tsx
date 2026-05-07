import type { Metadata } from "next";
import { Fraunces, Caudex, Fredoka, Quicksand, Patrick_Hand } from "next/font/google";

export const metadata: Metadata = {
  title: "Typography preview — Gustazo",
};

const fraunces = Fraunces({ subsets: ["latin"], display: "swap" });
const caudex = Caudex({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const fredoka = Fredoka({ subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ subsets: ["latin"], display: "swap" });
const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400", display: "swap" });

const FONTS = [
  {
    name: "Fraunces",
    className: fraunces.className,
    note: "Serif moderno con alma. Variable, cálido, premium. Mi favorito para Gustazo.",
    googleFontsUrl: "https://fonts.google.com/specimen/Fraunces",
  },
  {
    name: "Caudex",
    className: caudex.className,
    note: "Humanista serif clásico, sobrio, fácil de leer. Vibe de panadería europea.",
    googleFontsUrl: "https://fonts.google.com/specimen/Caudex",
  },
  {
    name: "Fredoka",
    className: fredoka.className,
    note: "Sans con remates redondeados. Amistoso, cercano. Hace eco a la 'G' del logo.",
    googleFontsUrl: "https://fonts.google.com/specimen/Fredoka",
  },
  {
    name: "Quicksand",
    className: quicksand.className,
    note: "Sans rounded más fino que Fredoka. Equilibrio entre amable y limpio.",
    googleFontsUrl: "https://fonts.google.com/specimen/Quicksand",
  },
  {
    name: "Patrick Hand",
    className: patrickHand.className,
    note: "Letra manuscrita marker. La más cercana al trazo orgánico del logo, pero arriesgada para todo el sitio.",
    googleFontsUrl: "https://fonts.google.com/specimen/Patrick+Hand",
  },
];

const SAMPLE_BODY =
  "Empezamos Gustazo porque uno de nosotros es celíaco desde los 2 años. Durante años buscamos panes y cositas dulces que no se desmiguen ni sean secos, y como nos costaba tanto encontrarlos, los empezamos a hacer nosotros.";

export default function TypographyPreviewPage() {
  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Intro */}
      <section style={{ padding: "3rem 1.5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Comparación interna
        </p>
        <h1 style={{ color: "#5C0A14", fontSize: "2rem", fontWeight: 600, lineHeight: 1.2 }}>
          ¿Qué tipografía suena a Gustazo?
        </h1>
        <p style={{ color: "#1a0a0c", fontSize: "1rem", marginTop: "1rem", lineHeight: 1.6 }}>
          Cada panel muestra el mismo bloque de hero + texto de muestra, con una tipografía distinta.
          Mirá cuál te conecta con la onda del logo y decime el nombre.
        </p>
      </section>

      {FONTS.map((font, idx) => (
        <article
          key={font.name}
          className={font.className}
          style={{
            borderTop: "2px solid #e8dcc8",
            backgroundColor: idx % 2 === 0 ? "#faf6ee" : "#fff",
          }}
        >
          {/* Etiqueta del font */}
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem 1rem" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Opción {idx + 1}
              </span>
              <span style={{ color: "#5C0A14", fontSize: "1.5rem", fontWeight: 700 }}>
                {font.name}
              </span>
              <a
                href={font.googleFontsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#5C0A14", fontSize: "0.75rem", textDecoration: "underline", opacity: 0.6 }}
              >
                ver en Google Fonts ↗
              </a>
            </div>
            <p style={{ color: "#7a5a5e", fontSize: "0.875rem", marginTop: "0.5rem", lineHeight: 1.5 }}>
              {font.note}
            </p>
          </div>

          {/* Hero simulado */}
          <div
            style={{
              backgroundColor: "#5C0A14",
              padding: "3rem 1.5rem",
              color: "#fff",
            }}
          >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  letterSpacing: "0.02em",
                  margin: 0,
                }}
              >
                Especialistas
              </h2>
              <p
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.75rem)",
                  fontWeight: 300,
                  marginTop: "0.75rem",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                en productos sin gluten.
              </p>
            </div>
          </div>

          {/* Section title + body */}
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 1.5rem 3rem" }}>
            <h3
              style={{
                color: "#5C0A14",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Lo que más nos piden.
            </h3>

            <p
              style={{
                color: "#1a0a0c",
                fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              {SAMPLE_BODY}
            </p>

            <p
              style={{
                color: "#1a0a0c",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#5C0A14" }}>Pan de Campo</strong> ·
              tu compañero de todos los días. <strong style={{ color: "#5C0A14" }}>Prepizza</strong> ·
              para la cena del finde con amigos. <strong style={{ color: "#5C0A14" }}>Cookie Red Velvet</strong> ·
              para acompañar el cafecito.
            </p>
          </div>
        </article>
      ))}

      {/* Footer */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center", backgroundColor: "#5C0A14", color: "#fff" }}>
        <p style={{ fontSize: "0.875rem", color: "#C9A227", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
          ¿Cuál te late?
        </p>
        <p style={{ fontSize: "1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6, opacity: 0.85 }}>
          Decime el nombre y la aplico al sitio. Si querés mezcla (ej: una para headlines y otra para body), también vale.
        </p>
      </section>
    </main>
  );
}
