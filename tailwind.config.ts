import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "0.9rem",
      xl: "1.1rem",
      "2xl": "1.2rem",
      "3xl": "1.4rem",
      "4xl": "1.6rem",
      "5xl": "1.8rem",
      "6xl": "2rem",
      "7xl": "2.2rem",
      "8xl": "2.5rem",
      "9xl": "2.8rem",
      "10xl": "3rem",
    },
    container: {
      center: true,
    },

    extend: {
      backgroundColor: {
        FnPrimary: "#3718ff",
        FnSecondary: "#ff004f",
        FnError: "#f44336",
        FnIndigo: "#651fff",
        FnSuccess: "#00c852",
        FnInfo: "#04cbff",
        FnWarning: "#ff9103",
        FnYellow: "#ffcb00",
        "gray-100": "#f2f4f7",
        "gray-200": "#eaecf0",
        "gray-300": "#d0d5dd",
        "gray-400": "#98a2b3",
        "gray-500": "#667085",
        "gray-600": "#485467",
        "gray-700": "#334054",
        "gray-800": "#1c2939",
        "gray-900": "#101828",
      },
    },
  },
  plugins: [],
};
export default config;
