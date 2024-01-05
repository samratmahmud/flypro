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
        gray: {"200": "#f1f5f9", "300": "#777", "900": "#333"},
        slate: {"600": "#eaeaea"},
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "22px"}],
      sm: ["14px", {lineHeight: "35px", letterSpacing: "-0.5px"}],
      md: ["15px", {lineHeight: "23px"}],
      base: ["16px", {lineHeight: "1.7", letterSpacing: "-0.05em"}],
      lg: ["18px", {lineHeight: "1.7", letterSpacing: "-0.05em"}],
      xl: ["20px", {lineHeight: "1.2", letterSpacing: "-0.05em"}],
      "2xl": ["30px", {lineHeight: "36px"}],
      "3xl": ["32px", {lineHeight: "1.2", letterSpacing: "-0.05em"}],
      "4xl": ["36px", {lineHeight: "45px", letterSpacing: "-0.05em"}],
      "5xl": ["50px", {lineHeight: "1.2", letterSpacing: "-0.05em"}],
    },
    boxShadow: {
      sm: "0px 16px 28px 0px rgba(0, 0, 0, 0.05)",
    },
    fontFamily: {
      OpenSans: ["'Open Sans'", ...fontFamily.sans],
    },
    backgroundImage: {
      bgLinear:
        "url('/images/linear-gradient(-180deg,#4cb5ff 0%,#1392ed 100%)')",
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
