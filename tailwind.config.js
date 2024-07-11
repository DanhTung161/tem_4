/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        lato: ['lato'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(180deg, #FFB469, #E57709)',
      },
    },
  },
  plugins: [],
}

