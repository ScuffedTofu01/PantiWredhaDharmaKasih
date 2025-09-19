/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Soft blue
        secondary: '#D4A017', // Warm gold
        accent: '#FFF8E7', // Cream background
        charcoal: '#333333', // Dark text
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))',
      },
    },
  },
  plugins: [],
};