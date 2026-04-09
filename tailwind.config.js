/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        'dark-card': '#0a0a0a',
        'neon-green': '#00ff66',
        'neon-cyan': '#00ffcc',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 10px rgba(0, 255, 102, 0.5), 0 0 20px rgba(0, 255, 102, 0.3)',
        'neon-cyan': '0 0 10px rgba(0, 255, 204, 0.5), 0 0 20px rgba(0, 255, 204, 0.3)',
        'neon-green-hover': '0 0 15px rgba(0, 255, 102, 0.8), 0 0 30px rgba(0, 255, 102, 0.5)',
        'neon-cyan-hover': '0 0 15px rgba(0, 255, 204, 0.8), 0 0 30px rgba(0, 255, 204, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
};
