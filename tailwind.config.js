/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      "2xsm": "10px",
      xm: "12px",
      sm: "13px",
      reg: "15px",
      lg: "18px",
      "2xl": "22px",
      "3xl": "25px",
      "4xl": "32px",
      "5xl": "40px",
      "6xl": "50px",
      "7xl": "70px",
    },
    fontWeight: {
      bold: "900",
      semibold: "600",
    },
    fontFamily: {
      mont: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
