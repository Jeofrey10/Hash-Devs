import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        ink: "#0A0B0A",
        "ink-2": "#131513",
        white: "#FFFFFF",
        "signal-green": "#3DDC57",
        "green-deep": "#1F6B4B",
        mist: "#A9B0AA",
        hairline: "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        hanken: ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        display: ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        pixel: ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        serif: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        none: "0px",
        pill: "999px",
      },
      maxWidth: {
        content: "1440px",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up-delay-1": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
        "fade-up-delay-2": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
        "fade-up-delay-3": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
        "slide-in-right": "slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "line-expand": "lineExpand 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        lineExpand: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
