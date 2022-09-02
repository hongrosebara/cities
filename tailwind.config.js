/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '1rem',
      'sm': '1.125rem',
      'tiny': '1.25rem',
      'base': '1.6rem',
      'lg': '1.875rem',
      'xl': '2.25rem',
      '2xl': '2.5rem',
      '3xl': '2.75rem',
      '4xl': '3rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      primary: {
        50: '#EFD5BA',
        100: '#EBCBA9',
        200: '#E3B788',
        300: '#DBA267',
        400: '#D38E46',
        500: '#C37A2E',
        600: '#965E23',
        700: '#684119',
        800: '#3B250E',
        900: '#0D0803'
      }
    }
  },
  plugins: [],
}