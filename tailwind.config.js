/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#0991ff",
        "black": "#000000",
      }
    },
  },
  plugins: [],
  // ...
}

