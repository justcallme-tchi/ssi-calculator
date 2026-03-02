/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        r: '#ff0022',
        'r-dim': '#7a0010',
        'r-muted': 'rgba(255,0,34,0.12)',
        ink: '#050505',
        surface: '#0c0c0c',
        card: '#111111',
        outline: '#1e1e1e',
        muted: '#3a3a3a',
        sub: '#666666',
        body: '#c8c8c8',
      },
      fontFamily: {
        mono:    ['"Share Tech Mono"', 'monospace'],
        display: ['"Bebas Neue"', 'sans-serif'],
        ui:      ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        pulse2:    'pulse2 2s ease-in-out infinite',
        flicker:   'flicker 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        pulse2:  { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
        flicker: { '0%,98%,100%': { opacity: 1 }, '99%': { opacity: 0.6 } },
      },
    },
  },
  plugins: [],
}
