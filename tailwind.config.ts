import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1392ed",
        gray: {"200": "#f1f5f9", "300": "#777", "500": "#bbb", "900": "#333"},
        slate: {"600": "#eaeaea"},
        blue: {"300": "rgba(255,255,255)"},
        green: {"600": "#34bf49"},
        red: {"500": "#ff4c4c", "950": "#212121"},
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "22px"}],
      sm: ["14px", {lineHeight: "35px", letterSpacing: "-0.5px"}],
      md: ["15px", {lineHeight: "23px"}],
      base: ["16px", {lineHeight: "1.7", letterSpacing: "-0.05em"}],
      lg: ["18px", {lineHeight: "1.7", letterSpacing: "-0.05em"}],
      xl: ["20px", {lineHeight: "1.2", letterSpacing: "-0.05em"}],
      "2xl": ["29px", {lineHeight: "36px"}],
      "3xl": ["32px", {lineHeight: "1.2", letterSpacing: "-0.05em"}],
      "4xl": ["36px", {lineHeight: "45px", letterSpacing: "-0.05em"}],
      "5xl": ["50px", {lineHeight: "1.2", letterSpacing: "-0.05em"}],
      "6xl": ["10px", {lineHeight: "70px", letterSpacing: "-0.5px"}],
      "7xl": ["14px", {lineHeight: "70px", letterSpacing: "-0.5px"}],
    },
    boxShadow: {
      sm: "0px 16px 28px 0px rgba(0, 0, 0, 0.05)",
    },
    fontFamily: {
      OpenSans: ["'Open Sans'", ...fontFamily.sans],
    },
    backgroundImage: {
      "100": "linear-gradient(-180deg,#4cb5ff 0%,#1392ed 100%)",
      "header-bg": "url('/images/hero-bg.png')",
      "dron-camera": "url('/images/hero-cam.png')",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.93750rem",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
    },
  },
  plugins: [],
};
export default config;
