/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E1B2A',
          50: '#E8EDF3',
          100: '#D1DBE6',
          200: '#A3B6CD',
          300: '#7591B4',
          400: '#476C9B',
          500: '#1A3F6E',
          600: '#142F52',
          700: '#0F2238',
          800: '#0E1B2A',
          900: '#091018',
        },
        cream: {
          DEFAULT: '#F9F6F1',
          50: '#FDFCFA',
          100: '#F9F6F1',
          200: '#F3EDE3',
          300: '#EDE4D5',
        },
        champagne: {
          DEFAULT: '#E5A55D',
          light: '#F0C08E',
          dark: '#C98A3E',
        },
        gold: {
          DEFAULT: '#C9A86A',
          light: '#DCC591',
          dark: '#A8854A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        persian: ['Vazirmatn', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(14, 27, 42, 0.06), 0 1px 2px rgba(14, 27, 42, 0.04)',
        'card-hover': '0 12px 32px rgba(14, 27, 42, 0.12), 0 4px 8px rgba(14, 27, 42, 0.06)',
        'premium': '0 20px 60px rgba(14, 27, 42, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'heart-pop': 'heartPop 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heartPop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
