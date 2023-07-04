/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        tryPrimary: 'rgb(var(--color-tryPrimary) / <alpha-value>)',
        trySecondary: 'rgb(var(--color-trySecondary) / <alpha-value>)',
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
        grey: {
          100: '#F4F4F4',
          200: '#D9D9D9',
          300: '#CDCDCD',
          400: '#ababab',
          500: '#0000004D',
          600: '#00000080',
          700: '#666666',
          800: '#565656',
          900: '#212529',
        },
        sky: {
          10: '#F4F4F400',
          20: '#f5fafe',
          40: '#E4F2FFBF',
          60: '#edf2f8',
          100: '#bddcff',
          200: '#5E82BD',
          300: '#4fa2fe',
          400: '#0066FF',
          500: '#0066A6',
          600: '#275DB2',
          700: '#2860B6',
          800: '#2858A7',
          900: '#1C4889',
        },
        chart: {
          50: '#FD68D5',
          100: '#EC406B',
          200: '#FF9600',
          300: '#FFD64D',
          400: '#92E917',
          500: '#10C785',
          600: '#009F66',
          700: '#51A3FF',
          800: '#51CCFF',
          900: '#A800FF',
        },
      },
    },
  },
  plugins: [],
};
