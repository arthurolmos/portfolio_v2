import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#07f572",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        transparent: "rgba(255, 255, 255, 0.4)",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateX(-1%)",
          },
          to: {
            opacity: "100",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in .5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
