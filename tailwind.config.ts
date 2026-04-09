import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#020817",
          900: "#050d1e",
          800: "#0a1628",
          700: "#0f1f38",
          600: "#152847",
        },
        cyan: {
          electric: "#00d4ff",
          soft: "#00b8d9",
          glow: "#00f0ff",
        },
        violet: {
          tech: "#7c3aed",
          soft: "#8b5cf6",
          glow: "#a78bfa",
        },
      },
      backgroundImage: {
        "grid-navy": "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.15) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "scan": "scan 3s linear infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,212,255,0.3)" },
          "100%": { boxShadow: "0 0 60px rgba(0,212,255,0.6), 0 0 100px rgba(124,58,237,0.3)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0,0,0,0.37), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-hover": "0 16px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
        "cyan-glow": "0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.2)",
        "violet-glow": "0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
