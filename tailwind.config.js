/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./components/**/*.html",
    "./js/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'off-white': '#f8f8f8',
        'steel': '#6b7280',
        'accent-orange': '#d97706',
        'dark-bg': '#0f0f0f',
        'dark-card': '#1a1a1a',
        'dark-border': '#2a2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
