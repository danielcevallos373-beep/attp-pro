/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Glacial Indifference"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#142404',
          primary: '#397757',
          light: '#f8fafc', // keeping white-ish for better contrast instead of muddy #DEE6E6
          accent: '#AABD4E'
        }
      }
    },
  },
  plugins: [],
}

