/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu VIC WA NT Hand"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

