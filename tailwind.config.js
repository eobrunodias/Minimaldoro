/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C0910",
        secondary: "#63A375",
        textColor: "#faf6eb",
      },
      fontFamily: {
        fontInter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
