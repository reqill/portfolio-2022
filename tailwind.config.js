const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['quiet-sans', ...defaultTheme.fontFamily.sans],
        'mono': ['nitti', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'bg': '#021931',
        'accent': '#44fee0',
        'header': '#ecedfc',
        'text': '#97aec5',
        'bg-element': '#1f3a56',
        'card': '#17223f',
        'disabled': '#4a6682',
      },
      boxShadow: {
        'start': 'inset 0 0 0 0 #44fee0',
        'finish': 'inset 207px 0 0 0 #44fee0',
      }
    }
  },
  plugins: [],
}
