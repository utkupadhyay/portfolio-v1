module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      'h1': ['64px', {
        '700': '68px',
        'letterSpacing': '-0.02em'
      }],
      // 'h2': '3rem',
      // 'h3': '2.5rem',
      // // Add more font sizes as needed
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
}