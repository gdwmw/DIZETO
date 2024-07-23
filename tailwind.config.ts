import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
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
        card: "box-shadow, transform",
        priceCard: "transform, box-shadow",
      },
    },
  },
};

export default config;
