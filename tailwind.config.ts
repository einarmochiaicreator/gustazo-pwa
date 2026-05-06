import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores de marca Gustazo
        bordo: {
          DEFAULT: "#5C0A14",
          light: "#7a1020",
          dark: "#3e0009",
        },
        dorado: {
          DEFAULT: "#C9A227",
          light: "#d9b84a",
          dark: "#a07d0f",
          50: "#fdf8e8",
          100: "#f7ecbf",
        },
        crema: {
          DEFAULT: "#faf6ee",
          dark: "#f0e8d6",
        },
        ink: {
          DEFAULT: "#1a0a0c",
          muted: "#7a5a5e",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
