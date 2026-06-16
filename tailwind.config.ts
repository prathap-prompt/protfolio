import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A0F1E",
        navy: "#0D1B2A",
        "navy-light": "#112240",
        slate: "#8892B0",
        "slate-light": "#A8B2D8",
        "slate-lightest": "#CCD6F6",
        accent: "#00D4FF",
        "accent-dim": "#00A8CC",
        "accent-glow": "rgba(0, 212, 255, 0.15)",
        gold: "#FFB700",
        "gold-dim": "rgba(255, 183, 0, 0.15)",
        surface: "#112240",
        "surface-2": "#1A2E4A",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Cal Sans'", "'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "grid-size": "50px 50px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse_slow: "pulse 4s ease-in-out infinite",
        "border-flow": "borderFlow 3s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-accent": "0 0 20px rgba(0, 212, 255, 0.3)",
        "glow-gold": "0 0 20px rgba(255, 183, 0, 0.2)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 212, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
