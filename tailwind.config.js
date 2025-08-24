// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}" // Add this line if you have an index.html in the root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}