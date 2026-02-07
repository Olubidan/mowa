/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mowa: {
          oxblood: '#630330', // Deep Oxblood/Burgundy
          champagne: '#E8D5C4', // Champagne Silk
          gold: '#C5A059', // Antique Gold
          parchment: '#F9F7F2', // Soft Parchment
          black: '#1A1A1A', // Soft Black for text
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Tenor Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      },
    },
  },
  plugins: [],
}
