/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2647',
          mid: '#144272',
          light: '#1F5993',
        },
        gold: {
          DEFAULT: '#B8902A',
          light: '#D4AA4A',
          bg: '#FBF5E6',
        },
        forest: {
          DEFAULT: '#1A6B45',
          light: '#21885A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
