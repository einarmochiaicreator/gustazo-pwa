import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f7f3eb",
          dark: "#ede5d4",
        },
        verde: {
          50: "#eaf5ef",
          100: "#d2ead9",
          200: "#a8d5ba",
          300: "#85c4a0",
          400: "#5b9279",
          500: "#3f7359",
        },
        ink: {
          DEFAULT: "#2d3a35",
          muted: "#6b7570",
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
