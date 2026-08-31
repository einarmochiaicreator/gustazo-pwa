import type { Config } from "tailwindcss";

// Sistema "Amanecer": un solo tema, cálido y nocturno.
// La identidad no viene de Tailwind sino de estos tokens propios:
// nada de paletas por defecto en la UI.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crema: "#fdf3e7",
        crema2: "#eed3b8",
        crema3: "#d9b598",
        acento: "#f6c48f",
        acentoClaro: "#ffe9b8",
        frio: "#a9c6f2",
        noche: "#1c1224",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Alegreya Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        tarjeta: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
