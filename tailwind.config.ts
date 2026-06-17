import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#14B88F",
          "green-dark": "#0F8A6B",
          navy: "#0D2E5C",
          // Verde accesible (AA ≥4.5:1 con blanco) para botones y enlaces.
          cta: "#0E8064",
          "cta-dark": "#0B6E54",
        },
        surface: "#F8FAFC",
        ink: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out both",
        slideUp: "slideUp 0.7s ease-out both",
        floatY: "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
