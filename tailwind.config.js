module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif']
      },
      colors: {
        primary: '#FB4437',
        secondary: "#D47B42"
      }
    },
  },
  plugins: [],
}