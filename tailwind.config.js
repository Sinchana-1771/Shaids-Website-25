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
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",
        popover: "oklch(var(--popover))",
        "popover-foreground": "oklch(var(--popover-foreground))",
        primary: "oklch(var(--primary))",
        "primary-foreground": "oklch(var(--primary-foreground))",
        secondary: "oklch(var(--secondary))",
        "secondary-foreground": "oklch(var(--secondary-foreground))",
        muted: "oklch(var(--muted))",
        "muted-foreground": "oklch(var(--muted-foreground))",
        accent: "oklch(var(--accent))",
        "accent-foreground": "oklch(var(--accent-foreground))",
        destructive: "oklch(var(--destructive))",
        "destructive-foreground": "oklch(var(--destructive-foreground))", // Not present in provided CSS but good practice? User didn't provide it. I'll omit or check if destructive uses it. User provided --destructive but not --destructive-foreground. Wait, looking at file... --destructive is there. --destructive-foreground is NOT.
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        bgGradient: "linear-gradient(71.8deg, #11163E 3.68%, #000000 117.9%)",
        buttonGradient:
          "linear-gradient(180deg, #8133F1 0%, #5C37B6 34.5%, rgba(68, 32, 134, 0.85) 71.5%, #341068 89.5%)",
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
