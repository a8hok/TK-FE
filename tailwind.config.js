/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        TK: {
          background: '#F3F6FA',
          default: '#131921',
          text: '#34465D',
        },
      },
    },
  },
  plugins: [],
};
