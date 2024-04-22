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

      colors: {
        "dark-grey-rgba": "rgba(36, 36, 36, 0.54)",
        "light-grey-rgba": "rgba(117, 117, 117, 0.54)",
      },
    },
  },
  plugins: [],
};
