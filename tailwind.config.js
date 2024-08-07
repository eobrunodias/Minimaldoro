/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C0910",
        secondary: "#008efa",
        textColor: "#faf6eb",
      },
      fontFamily: {
        fontInter: ["Chivo Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
