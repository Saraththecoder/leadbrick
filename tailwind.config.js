/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brick: '#C45E2A',
        'brick-dark': '#A34C1E',
        'brick-light': '#E8784A',
        black: '#0A0A0A',
        charcoal: '#1A1A1A',
        grey: '#6B6B6B',
        light: '#F5F3F0',
        white: '#FFFFFF',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        clash: ['Clash Display', 'Manrope', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
