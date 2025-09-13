import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [
    plugin(({ matchVariant }) => {
      matchVariant("h-max", (value) => `@media (max-height: ${value})`);
      matchVariant("h-min", (value) => `@media (min-height: ${value})`);
    }),
  ],
  theme: {
    extend: {
      animation: {
        backgroundGradient: "gradient 15s ease infinite",
        opacity: "opacityChange 10s infinite",
      },
      colors: {
        dark: "#23272d",
      },
      fontFamily: {
        geistMono: ["var(--font-geist-sans)"],
        geistSans: ["var(--font-geist-mono)"],
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
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
        opacityChange: {
          "0%, 10%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
          "60%, 100%": {
            opacity: "0.5",
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
