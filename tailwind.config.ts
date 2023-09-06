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
      colors: {
        FnPrimary: "#3718ff",
        FnSecondary: "#ff004f",
        FnError: "#f44336",
        FnIndigo: "#651fff",
        FnSuccess: "#00c852",
        FnInfo: "#04cbff",
        FnWarning: "#ff9103",
        FnYellow: "#ffcb00",
        FnLinkDark: "#2a9eff",
      },
    },
  },
  plugins: [],
};
export default config;
