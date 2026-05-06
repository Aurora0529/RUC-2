/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ruc-red': '#9B1C1F',
        'ruc-red-dark': '#801619',
        'paper-cream': '#F7F1E6',
        'paper-old': '#E8DDC9',
        'text-dark': '#2F2A26',
        'text-brown': '#5C4B43',
        'accent-gold': '#C8A46A',
      },
      fontFamily: {
        'serif': ['Noto Serif SC', 'serif'],
        'calligraphy': ['Zhi Mang Xing', 'cursive'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/old-paper.png')",
        'handmade-paper': "url('https://www.transparenttextures.com/patterns/handmade-paper.png')",
      },
      animation: {
        'leaf-fall': 'leaf-fall 10s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
