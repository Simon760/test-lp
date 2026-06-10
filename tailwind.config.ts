import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // dark base (BullGPT-style)
        ink: {
          DEFAULT: "#0a0a0b", // page background / dark surfaces
          soft: "#141416",
        },
        surface: {
          DEFAULT: "#101012", // cards
          raised: "#17171a",
        },
        accent: {
          DEFAULT: "#1fd96b", // vivid spring green
          dark: "#46e892", // brighter — used as text on dark chips
          soft: "rgba(31,217,107,0.12)", // translucent green chip bg (works on dark)
          ring: "rgba(31,217,107,0.40)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,11,13,0.04), 0 8px 24px -12px rgba(10,11,13,0.12)",
        card: "0 1px 3px rgba(10,11,13,0.05), 0 20px 40px -24px rgba(10,11,13,0.18)",
        glow: "0 0 0 1px rgba(21,163,74,0.12), 0 24px 60px -24px rgba(21,163,74,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
