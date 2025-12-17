/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bernardos': {
            'red': '#E53935',
            'red-dark': '#C62828',
            'red-light': '#EF5350',
            'black': '#000000',
            'white': '#FFFFFF',
            'gray-light': '#BDBDBD',
            'gray-medium': '#8D8D8D',
            'gold': '#B8860B',
            'gold-light': '#D4AF37',
            'whatsapp': '#25D366',
          }
        }
      },
    },
    plugins: [],
  }