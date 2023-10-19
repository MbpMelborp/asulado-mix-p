/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        je: ["var(--font-je)"],
        sans: ["var(--font-avenir)"],
      },
      colors: {
        primary: "#273E82",
        secondary: "#5FA4C0",
        BG: {
          1: "#08C1FE",
          2: "#F8EC81",
          3: "#6DC0FC",
          4: "#F5FAFB",
        },
        azul: {
          dark: "#18254E",
          norm: "#273E82",
          bold: "#2752B0",
          bright: "#2EB2CF",
          bright2: "#08C1FE",
          light: "#E9F5F8",
        },
        amarillo: {
          light: "#F5DA70",
          mid: "#F0C82F",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
};
