/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        accentblack: '#0D1113',
        accentpink: '#E8317E',
        accentgray: '#20242c',
        accentwhite: '#FBF9F9',

      }
    },
  },
  plugins: [],
}