
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  extend: {
    fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
  keyframes: {
    slideDown: {
      '0%': { opacity: 0, transform: 'translateY(-10px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    slideDown: 'slideDown 0.3s ease-out',
  },
}}
