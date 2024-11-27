/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#b9ddfe',
          300: '#7cc2fd',
          400: '#36a6fa',
          500: '#0c8def',
          600: '#006fcb',
          700: '#0058a3',
          800: '#004b86',
          900: '#003f6f',
        },
        secondary: {
          50: '#f4f7fb',
          100: '#e9eff7',
          200: '#cdddec',
          300: '#a3c0dc',
          400: '#729bc7',
          500: '#507db2',
          600: '#3d6496',
          700: '#325079',
          800: '#2b4365',
          900: '#273a55',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};