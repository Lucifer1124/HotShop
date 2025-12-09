/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#8672ff',
        'secondary-color': '#2ecc71',
      },
      fontFamily: {
        audiowide: ['"Audiowide"', 'cursive'],
      },
    },
  },
  plugins: [],
}