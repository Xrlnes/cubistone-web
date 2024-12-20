module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-haas': ['Tilt Neon', 'sans-serif'],
      },
      colors: {
        primary: '#1a237e', // Koyu mavi
        secondary: '#232033', // Koyu arka plan
        accent: '#6366f1', // Indigo/mor tonu
      },
      animation: {
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shine': 'shine 1.5s linear infinite',
        'twinkle': 'twinkle 3s linear infinite',
        'spin': 'spin 20s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'twinkle': {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        },
        'spin': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      }
    },
  },
  plugins: [],
}