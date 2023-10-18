import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#23272d",
      },
      transitionProperty: {
        priceCard: "transform, box-shadow",
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "100% 0%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
      },
      animation: {
        backgroundGradient: "gradient 15s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
