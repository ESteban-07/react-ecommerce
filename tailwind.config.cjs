/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-60': 'repeat(auto-fit, 15rem)',
      },
    },
  },
  plugins: [],
};
