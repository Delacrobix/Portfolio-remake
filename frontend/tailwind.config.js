const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        bacasime: ["Bacasime Antique", "serif"],
        lora: ["Lora", "serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        comfortaa: ["Comfortaa", "cursive"],
        josefin: ["Josefin Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [nextui()],
};
