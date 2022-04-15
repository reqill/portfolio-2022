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
        'accent': '#45FCDE',
        'header': '#ecedfc',
        'text': '#97aec5',
        'bg-element': '#1f3a56',
        'card': '#17223f',
        'disabled': '#18334F',
      },
      boxShadow: {
        'start': 'inset 0 0 0 0.1px #45FCDE',
        'finish': 'inset 350px 0 0 0.1px #45FCDE',
        'finish2': 'inset 235px 0 0 0.1px #45FCDE',
        '3xl': '0 20px 25px rgba(0, 0, 0, 0.125)',
      },
      screens: {
        'specific': '1140px',
      },
    }
  },
  plugins: [],
}
