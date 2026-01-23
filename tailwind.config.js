/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      GunterzRegular: ["Gunterz-Regular", ...fontFamily.sans],
      NordBold: ["Nord-Bold", ...fontFamily.sans],
      NordRegular: ["Nord-Regular", ...fontFamily.sans],
      NordMedium: ["Nord-Medium", ...fontFamily.sans],
      Outfit: ["Outfit", ...fontFamily.sans],
    },
    extend: {
      colors: {
        // Background Colors
        "midnight-navy": "#0B1220",
        "deep-indigo": "#0F1A2E",
        "dark-slate-blue": "#101B30",
        "steel-blue-tint": "#1A2C46",
        // Brand & Accent Colors
        "primary-cyan": "#4CC3E6",
        "soft-aqua": "#6FD7F2",
        "sky-blue": "#55BFD9",
        // Icon & Decorative Colors
        "icon-cyan": "#58C8E8",
        "light-icon-blue": "#7FD9F2",
        "decorative-blue": "#4FAFD1",
        // Text Colors
        "text-light-blue-gray": "#C7D2E0",
        "text-muted-blue-gray": "#9FB1C8",
        "text-soft-slate-blue": "#7A8CA6",
      },
      backgroundImage: {
        bgGradient: "linear-gradient(135deg, #0B1220 0%, #0F1A2E 50%, #101B30 100%)",
        buttonGradient:
          "linear-gradient(180deg, #4CC3E6 0%, #55BFD9 50%, #4FAFD1 100%)",
      },
    },
    animation: {
      "star-movement-bottom": "star-movement-bottom linear infinite alternate",
      "star-movement-top": "star-movement-top linear infinite alternate",
    },
    keyframes: {
      "star-movement-bottom": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
      },
      "star-movement-top": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(100%, 0%)", opacity: "0" },
      },
    },
  },

  // plugins: [require("@tailwindcss/line-clamp")],
};
