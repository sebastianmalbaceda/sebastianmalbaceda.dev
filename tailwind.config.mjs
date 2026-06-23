import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', '"Iowan Old Style"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SF Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        ink: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        sage: {
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'marquee': 'marquee 50s linear infinite',
        'marquee-rev': 'marqueeRev 60s linear infinite',
        'float': 'float 9s ease-in-out infinite',
        'breathe': 'breathe 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.6s linear infinite',
        'caret': 'caret 1.05s steps(1) infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'orbit': 'orbit 14s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe: {
          '0%,100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        caret: {
          '0%,50%': { opacity: '1' },
          '51%,100%': { opacity: '0' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(18px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(18px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
