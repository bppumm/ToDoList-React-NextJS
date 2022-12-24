/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
};
