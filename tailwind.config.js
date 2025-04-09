const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "neutral-11": "#1a1a1a",
        "neutral-91": "#1a1a1a",
        "neutral-white": "#ffffff",
        "neutral-41": "#000000",
        "neutral-101": "#000000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
