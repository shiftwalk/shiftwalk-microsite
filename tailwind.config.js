module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['SuisseIntl', 'Arial', 'sans-serif'],
      'mono': ['Space Mono', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#242B2D',
        'white': '#FFF',
        'off-grey': '#ABAEA8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}