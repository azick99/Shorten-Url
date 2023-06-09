/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: '(min-aspect-ratio:3/2)' },
        tallscreen: { raw: '(min-aspect-ratio:13/20)' },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3.15rem',
      },
      colors: {
        'cyan': 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        'red': 'hsl(0, 87%, 67%)',
        'gray': 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': ' hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)',
      },
    },
    plugins: [],
  },
}
