/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: { dark: '#050811' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow':     'spin 8s linear infinite',
        'spin-slower':   'spin 20s linear infinite',
        'float':         'float 6s ease-in-out infinite',
        'aurora':        'aurora 20s ease infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'pulse-glow':    'pulse-glow 2s ease-in-out infinite',
        'gradient-shift':'gradient-shift 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0%,  0%) scale(1)' },
          '33%':       { transform: 'translate(4%,  3%) scale(1.06)' },
          '66%':       { transform: 'translate(-3%, 4%) scale(0.97)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 8px 3px rgba(6,182,212,0.3)' },
          '50%':       { opacity: '1',   boxShadow: '0 0 20px 8px rgba(6,182,212,0.55)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
