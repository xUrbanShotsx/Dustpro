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
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        dp: {
          bg: "#0c0c0c",
          surface: "#161616",
          elevated: "#1e1e1e",
          border: "#242424",
          amber: "#dc2626",
          "amber-light": "#ef4444",
          text: "#f5f5f5",
          muted: "#737373",
          dim: "#3a3a3a",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
