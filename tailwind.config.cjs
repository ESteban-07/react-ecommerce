/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile-m': { max: '375px' },
        'mobile-l': { max: '650px' },
        tablet: { max: '800px' },
      },
      gridTemplateColumns: {
        'fit-60': 'repeat(auto-fit, 15rem)',
      },
    },
  },
  plugins: [],
};
