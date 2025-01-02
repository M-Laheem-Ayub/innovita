/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["'Poppins'", "serif"],
        inter: ["'Inter'", "serif"],
        zen: ["'Zen Dots'", "serif"],
        bir: ["'Birthstone'", "serif"],
      },
    },
  },
  plugins: [],
};