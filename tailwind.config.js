const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Brankovic", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins"],
        comic: ["Comic"],
      },
      colors: {
        body: "#03050b",
        main: "#0066f2",
      },
      backgroundImage: {
        primary:
          "linear-gradient(180deg, rgb(70.13, 148.58, 255) 0%, rgb(0, 97.63, 231.63) 100%)",
        crack: "url('/bg.png')",
        hero: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 100%);",
        about:
          "linear-gradient(180deg,rgba(255, 255, 255, 0.11) 0%,rgba(255, 255, 255, 0.11) 51.65%,rgba(255, 255, 255, 0) 100%)",
        roadmap:
          "linear-gradient(to bottom, rgb(70.13, 148.58, 255), rgb(0, 97.63, 231.63)) 1",
      },
      screens: {
        mid: "1315px",
      },
      boxShadow: {
        hero: "34.26px 31.05px 52.46px #00074814",
        about: "0px 4px 6px #00000040",
      },
    },
  },
  plugins: [],
};
