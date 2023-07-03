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
      },
      backgroundImage: {
        primary:
          "linear-gradient(180deg, rgb(70.13, 148.58, 255) 0%, rgb(0, 97.63, 231.63) 100%)",
        crack: "url('/bg.png')",
        hero: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 100%);",
      },
      boxShadow: {
        hero: "34.26px 31.05px 52.46px #00074814",
      },
    },
  },
  plugins: [],
};
