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
    },
  },
  plugins: [],
};
