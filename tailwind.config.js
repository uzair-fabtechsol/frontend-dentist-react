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
        navy: {
          50: '#f0f2f5',
          100: '#d9dde4',
          200: '#b3bac8',
          300: '#8b95a5',
          400: '#6b7a8c',
          500: '#4a5568',
          600: '#2d3e50',
          700: '#1a2332',
          800: '#141b27',
          900: '#0e131c',
          950: '#080b10',
        },
        silver: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e8eaed',
          300: '#dee2e6',
          400: '#c0c5ce',
          500: '#8b95a5',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        gold: {
          50: '#fdf9e7',
          100: '#faf0c3',
          200: '#f5e085',
          300: '#e9c84a',
          400: '#d4af37',
          500: '#b8952e',
          600: '#927525',
          700: '#6e581d',
          800: '#4a3b14',
          900: '#251e0a',
        },
        accent: {
          blue: '#4a90e2',
          success: '#28a745',
          warning: '#ffc107',
          danger: '#dc3545',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
