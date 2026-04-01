/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        sand: "#dfd3c3",
        stone: "#b9ab99",
        ivory: "#f5efe7",
        gold: "#cba96b",
      },
      fontFamily: {
        display: ['"Iowan Old Style"', '"Palatino Linotype"', "serif"],
        sans: ['"Avenir Next"', '"Segoe UI"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 30px 80px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        haze:
          "radial-gradient(circle at top, rgba(223, 211, 195, 0.18), transparent 42%), radial-gradient(circle at 20% 20%, rgba(203, 169, 107, 0.12), transparent 28%)",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
