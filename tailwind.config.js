/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ["Varela Round", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },

      width: {
        70: "74%",
      },

      height: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
      },

      colors: {
        "dark-grey-rgba": "rgba(36, 36, 36, 0.54)",
        "light-grey-rgba": "rgba(117, 117, 117, 0.54)",
        "for-opacity-black": "rgba(0, 0, 0, 0.2)",
        "for-opacity-white": "rgba(255, 255, 255, 0.2)",
      },

      screens: {
        "min-mobileM": { min: "376px" },
        "min-tablet": { min: "769px" },
        "min-laptopL": { min: "1441px" },
        tablet: { max: "768px" },
        mobileL: { max: "425px" },
        mobileM: { max: "375px" },
        laptop: { max: "1024px" },
        laptopL: { max: "1440px" },
      },
    },
  },
  plugins: [],
};
