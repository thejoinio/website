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
        
      },
      backgroundImage: {
        token: "url(@/assets/icons/join-token.webp)",
        possibilitiesVector: "url(@/assets/vectors/possibilities1.png)",
        possibilitiesVector2: "url(@/assets/vectors/possibilities2.png)",
        globe: "url(@/assets/images/globe-background.webp)",
        presaleSectionBg: "url(@/assets/images/presale-section-bg.png)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-in": {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-50%)", opacity: "0" },
        },
        "bounce-hero": {
          '0%, 100%': { transform: "translateY(3%)" },
          '50%': { transform: "translateY(-3%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 8s linear infinite",
        "slide-in": "slide-in 0.2s ease-in-out forwards",
        "slide-out": "slide-out 0.2s ease-in-out forwards",
        "bounce-hero": "bounce-hero 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
