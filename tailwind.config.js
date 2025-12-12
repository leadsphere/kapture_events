/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D62460",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F06A8A",
          foreground: "#FFFFFF",
        },
        plum: {
          DEFAULT: "#5A0A2C",
        },
        black: "#000000",
        white: "#FFFFFF",
        grey: {
          light: "#C7D1D4",
          dark: "#4F5A60",
        },
      },

      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #D62460 0%, #F06A8A 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #D6246080 0%, #F06A8A80 100%)",
      },

      boxShadow: {
        "glow-magenta": "0 0 20px rgba(214,36,96,0.45)",
      },
    },
  },
  plugins: [animate],
};
