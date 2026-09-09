/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      colors: {
        ink: {
          950: '#050507',
          900: '#0a0a10',
          850: '#0e0e15',
          800: '#13131c',
        },
      },
      boxShadow: {
        badge: '0 8px 24px -8px rgba(0, 0, 0, 0.55)',
        card: '0 24px 60px -30px rgba(0, 0, 0, 0.7)',
        panel: '0 40px 120px -60px rgba(0, 0, 0, 0.9)',
        glow: '0 0 50px -12px rgba(99, 102, 241, 0.4)',
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
