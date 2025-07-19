/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 2s infinite',
        'slideInLeft': 'slideInLeft 1s ease-out',
        'fadeIn': 'fadeIn 1s ease-in',
        'slideUp': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        primary: {
          50: '#f0f2f5',
          100: '#e1e5eb',
          200: '#c7d0d8',
          300: '#a8b5c0',
          400: '#8a97a6',
          500: '#4E567E',
          600: '#3d4461',
          700: '#2c3144',
          800: '#1b1e27',
          900: '#0a0b0f',
        },
        secondary: {
          50: '#f7fcfa',
          100: '#eff9f4',
          200: '#d2f1e4',
          300: '#b5e9d4',
          400: '#98e1c4',
          500: '#7bd9b4',
          600: '#5ed1a4',
          700: '#41c994',
          800: '#24c184',
          900: '#07b974',
        }
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
