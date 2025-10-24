/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          light: "#A47551",
          DEFAULT: "#5C4033",
          dark: "#3E2723",
        },
        beige: "#F5F5DC",
        pale: "#FFF4C1",
        cream: "#FAF3E0",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
