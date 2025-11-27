/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bbe7ff',
          300: '#8cd9ff',
          400: '#55c2ff',
          500: '#2ea4ff',
          600: '#1785f7',
          700: '#106de3',
          800: '#1458b8',
          900: '#174b91',
          950: '#122f58',
        },
        accent: {
          50: '#f0fdf5',
          100: '#dcfce8',
          200: '#bbf7d1',
          300: '#86efad',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803c',
          800: '#166533',
          900: '#14532b',
          950: '#052e14',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

