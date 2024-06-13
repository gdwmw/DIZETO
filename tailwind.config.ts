import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      animation: {
        backgroundGradient: "gradient 15s ease infinite",
      },
      colors: {
        dark: "#23272d",
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "100% 0%",
          },
        },
      },
      transitionProperty: {
        priceCard: "transform, box-shadow",
      },
    },
  },
};

export default config;
