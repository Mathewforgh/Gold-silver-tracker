/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          500: '#FFD700',
          600: '#E6C200',
          400: '#FFE135',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          500: '#C0C0C0',
          600: '#A9A9A9',
          400: '#D3D3D3',
        },
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E0E0E0',
        }
      },
    },
  },
  plugins: [],
}
