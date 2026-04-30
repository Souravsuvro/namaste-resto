/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#fff8f1',
          100: '#ffecd8',
          200: '#ffd5a8',
          300: '#ffb66e',
          400: '#ff8c32',
          500: '#e8622a',
          600: '#d44d18',
          700: '#b03a13',
          800: '#8d2e11',
          900: '#732711',
          950: '#3e1106',
        },
        turmeric: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f4c430',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        spice: {
          50:  '#fdf8f6',
          100: '#f8ede6',
          200: '#f0d4c4',
          300: '#e4b49a',
          400: '#d48c6c',
          500: '#c4714a',
          600: '#a85c39',
          700: '#8b4730',
          800: '#6e3826',
          900: '#4a2418',
          950: '#2c1810',
        },
        cream: {
          50:  '#fffff8',
          100: '#fff8f0',
          200: '#ffeedd',
          300: '#ffe0c4',
          400: '#ffcc9e',
          500: '#f5b87a',
        },
        forest: {
          600: '#1a5c38',
          700: '#145030',
          800: '#0e4029',
          900: '#0a3020',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.webp')",
        'spice-gradient': 'linear-gradient(135deg, #2c1810 0%, #4a2418 50%, #e8622a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f4c430 0%, #e8622a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
