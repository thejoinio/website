import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        whitePrimary: "#FCFCFC",
        background: "#04141D",
        primary: "#7F5CE2",
        hoverPrimary: "#9891E1",
      },
      backgroundImage: {
        'custom-conic': 'conic-gradient(from 0deg, #BB08F9 0%, #BB08F9 21%, #9694FF 36%, #FF65E6 57%, #2998D6 78%, #6904FF 100%)',
        'join-tokens': "url('/join-tokens-bg.png')",
        'slide-primary': "url('/slide1-bg.png')",
        'slide-card': "url('/slide2-bg.png')",
        'joinda-linear': "linear-gradient(98deg, rgba(102, 254, 203, 0.20) 6.1%, rgba(137, 64, 255, 0.20) 103.66%), rgba(29, 29, 29, 0.05)",
        'shaped-gradient': "url('/shaped-gradient-outline-big.png')",
        'nft': "url('/presale-bg.png')",
        'presale-pattern': "url('/presale-pattern.png'), url('/presale-pattern-flipped.png')",
        'presale-flare': "url('/presale-flare.png')"
      },
      backgroundPosition: {
        'presale-pattern': 'top, bottom',
      },
      backgroundSize: {
        'presale-pattern': '100% 40%, 100% 60%', 
      },
      backgroundRepeat: {
        'presale-pattern': 'no-repeat, no-repeat', 
      },
      maxWidth: {
        "8xl": "1440px",
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
        "bounce-token": {
          '0%, 100%': { transform: "translateY(-4%)" },
          '50%': { transform: "translateY(4%)" },
        },
        "bounce-nft": {
          '0%, 100%': { transform: "translateY(4%)" },
          '50%': { transform: "translateY(-4%)" },
        },
        'fade-in-out-grow-shrink': {
          '0%, 100%': { opacity: "0.1", transform: 'scale(0.8)' },
          '50%': { opacity: "1", transform: 'scale(1.2)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 8s linear infinite",
        "slide-in": "slide-in 0.2s ease-in-out forwards",
        "slide-out": "slide-out 0.2s ease-in-out forwards",
        "bounce-token": "bounce-token 3s linear infinite",
        "bounce-nft": "bounce-nft 3s linear infinite",
        'fade-in-out-grow-shrink': 'fade-in-out-grow-shrink 3s infinite',
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
