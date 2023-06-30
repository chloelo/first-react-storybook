/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        darkMode: {
          light: '#2F6299',
          DEFAULT: '#244A73',
          dark: '#18314D',
          darker: '#0b1725',
          contrasting: '#0FEDF8',
          warn: '#FF5C95',
        },
        primary: {
          100: '#edf2f9',
          200: '#f5faff',
          300: '#e4f2ff',
          350: '#bfdfff',
          400: '#50A5FF',
          500: '#51a3ff', // default
        },
        gray: {
          50: '#eeeeee',
          100: '#cacbcb',
          200: '#b3b3b3',
          300: '#ababab',
          400: '#9b9b9b',
          500: '#575757',
          600: '#595959',
        },
        yellow: {
          300: '#ffd64d',
          500: '#ffab00',
        },
        stone: {
          50: '#f4f4f4',
          100: '#e6e6e6',
          200: '#d5d5d5',
          300: '#c8c8c8',
        },
        red: {
          50: '#f7f7f7',
          500: '#EF4231',
        },
        rose: {
          500: '#ec406b',
        },
        green: {
          50: '#e3f7ed',
          500: '#10c785',
          600: '#058f5c',
        },
      },
    },
  },
  plugins: [],
};
