/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      colors: {
        canvas: '#dcdcd9',
        panel: '#f4f4f1',
        inkline: '#111114',
        accent: {
          DEFAULT: '#2f6bff',
          dark: '#1f56e0',
        },
      },
      boxShadow: {
        tile: '0 12px 30px -14px rgba(15, 15, 20, 0.25)',
        card: '0 24px 50px -24px rgba(15, 15, 20, 0.28)',
        frame: '0 40px 90px -50px rgba(15, 15, 20, 0.4)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
