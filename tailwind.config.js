/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        je: ["var(--font-je)", "'Sora'", "sans-serif"],
        sans: ["var(--font-avenir)", "'Nunito'", "sans-serif"],
      },
      colors: {
        primary: "#273E82",
        secondary: "#5FA4C0",
        BG: {
          1: "#08C1FE",
          2: "#F8EC81",
          3: "#6DC0FC",
          4: "#F5FAFB",
          5: "#5DB8D7",
          8: "#E3F3FA",
          9: "#3C97D9",
          10: "#CEE3EB",
        },
        azul: {
          dark: "#18254E",
          norm: "#273E82",
          bold: "#2752B0",
          bright: "#2EB2CF",
          bright2: "#08C1FE",
          mid: "#2E52FA",
          light: "#E9F5F8",
        },
        alpha: {
          10: "#FAFEFE",
          20: "#E9F5F8",
        },
        amarillo: {
          light: "#F5DA70",
          mid: "#F0C82F",
        },
      },
      listStyleImage: {
        star: "var(--il-star-xs)",
        "star-xs": "var(--il-star-2xs)",
      },
      backgroundImage: {
        ayuda: "var(--il-ayuda)",
        lusa: "var(--il-lusa)",
        chat_open: "var(--il-chat-open)",
        chat_close: "var(--il-chat-close)",
        chat_wap: "var(--il-chat-wap)",
        chat_2: "var(--il-chat-2)",
        lusa_r_0: "var(--il-lusa-robot-0)",
        lusa_r_1: "var(--il-lusa-robot-1)",
        piso: "var(--bg-piso-1)",
        "p-login": "var(--il-bg-login)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#273E82",
          secondary: "#5FA4C0",
          accent: "#08C1FE",
          neutral: "#1e2433",
          "base-100": "#fff",
          info: "#2251dd",
          success: "#3ddbc9",
          warning: "#d28704",
          error: "#e53e68",
        },
      },
    ],
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};
