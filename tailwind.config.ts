import type { Config } from 'tailwindcss';

/**
 * Design tokens: 8px base (e.g. space-2 = 8px, space-4 = 16px).
 * Primary theme: professional dark (canvas). Light via html:not(.dark) + @layer in globals.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Core canvas — deep slate (spec + hierarchy) */
        canvas: {
          DEFAULT: '#0B0F19',
          elevated: '#0F172A',
          muted: '#111827',
        },
        /* Brand accents — Web3-leaning, not neon */
        brand: {
          DEFAULT: '#5B8FA8',
          cyan: '#4A8FA8',
          violet: '#7C8BC8',
        },
        surface: {
          950: '#0B0F19',
          900: '#0F172A',
          800: '#151E32',
          700: '#1C2942',
          600: '#243352',
        },
        accent: {
          DEFAULT: '#5B8FA8',
          muted: '#4A7A90',
          dim: '#3D5F72',
        },
        border: {
          DEFAULT: '#2A3548',
          muted: '#1E2535',
        },
        domain: {
          cloud: '#5A9BB8',
          ai: '#8B85C0',
          blockchain: '#5FA88D',
          security: '#B8956E',
        },
      },
      spacing: {
        /* 8px system aliases (Tailwind 2=8px, 4=16px — explicit docs) */
        18: '4.5rem', /* 72px */
        22: '5.5rem', /* 88px */
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -12px rgba(91, 143, 168, 0.1)',
        'glow-purple': '0 0 40px -12px rgba(124, 139, 200, 0.1)',
        'glow-green': '0 0 40px -12px rgba(95, 168, 141, 0.1)',
        'glow-orange': '0 0 40px -12px rgba(184, 149, 110, 0.1)',
        'glow-cyan-sm': '0 0 24px -10px rgba(91, 143, 168, 0.08)',
        'glow-purple-sm': '0 0 24px -10px rgba(124, 139, 200, 0.08)',
        'glow-green-sm': '0 0 24px -10px rgba(95, 168, 141, 0.08)',
        'glow-orange-sm': '0 0 24px -10px rgba(184, 149, 110, 0.08)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset',
        float: '0 8px 32px -8px rgba(0,0,0,0.2)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['2.25rem', { lineHeight: '1.15', fontWeight: '600' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'glow-pulse': 'glow-pulse 5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 24s ease-in-out infinite',
        float: 'float 5.5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.32' },
        },
        'gradient-shift': {
          '0%, 100%': { opacity: '0.012' },
          '50%': { opacity: '0.028' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
