import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#26231f",
        forest: "#55614b",
        moss: "#7d8969",
        clay: "#b47d5d",
        mist: "#f4f1ec",
        paper: "#fffaf3"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(38, 35, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
