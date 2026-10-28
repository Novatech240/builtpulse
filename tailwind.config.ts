import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#121F42",
          900: "#22366B",
          800: "#2C4482",
          600: "#4A62A6",
        },
        gold: {
          500: "#E1B427",
          300: "#EED37C",
          100: "#FBF3DA",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F5F6FA",
          100: "#E8EBF2",
          300: "#C3C9D9",
          600: "#5B6480",
          900: "#0F1730",
        },
        success: "#2E8B57",
        error: "#C8423A",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["104px", { lineHeight: "0.98", letterSpacing: "-4.16px" }],
        "display-l": ["80px", { lineHeight: "1.04", letterSpacing: "-2.4px" }],
        "h2": ["56px", { lineHeight: "1.08", letterSpacing: "-1.68px" }],
        "h3": ["36px", { lineHeight: "1.15", letterSpacing: "-0.72px" }],
        "h4": ["22px", { lineHeight: "1.2", letterSpacing: "-0.22px" }],
      },
      boxShadow: {
        soft: "0px 2px 6px 0px rgba(7,13,34,0.12)",
        card: "0px 2px 6px 0px rgba(7,13,34,0.12), 0px 40px 80px -16px rgba(7,13,34,0.45)",
        gold: "0px 12px 24px -8px rgba(225,180,39,0.35)",
      },
      backgroundImage: {
        "brand-dark":
          "linear-gradient(141.5deg, rgb(27, 44, 94) 0%, rgb(11, 20, 46) 83.333%)",
        "brand-chip":
          "linear-gradient(158.3deg, rgb(27, 44, 94) 0%, rgb(11, 20, 46) 83.333%)",
        "gold-pill": "linear-gradient(90deg, #e1b427 0%, #eed37c 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
