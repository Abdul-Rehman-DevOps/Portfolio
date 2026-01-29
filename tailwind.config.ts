import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#0a0c10',
          900: '#0f1218',
          800: '#151a23',
          700: '#1c222d',
          600: '#252d3b',
        },
        accent: {
          DEFAULT: '#22d3ee',
          muted: '#0891b2',
          dim: '#0e7490',
        },
        border: {
          DEFAULT: '#2d3748',
          muted: '#1e293b',
        },
        domain: {
          cloud: '#22d3ee',
          ai: '#a78bfa',
          blockchain: '#34d399',
          security: '#fb923c',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.25)',
        'glow-purple': '0 0 40px -10px rgba(167, 139, 250, 0.25)',
        'glow-green': '0 0 40px -10px rgba(52, 211, 153, 0.25)',
        'glow-orange': '0 0 40px -10px rgba(251, 146, 60, 0.25)',
        'glow-cyan-sm': '0 0 24px -8px rgba(34, 211, 238, 0.2)',
        'glow-purple-sm': '0 0 24px -8px rgba(167, 139, 250, 0.2)',
        'glow-green-sm': '0 0 24px -8px rgba(52, 211, 153, 0.2)',
        'glow-orange-sm': '0 0 24px -8px rgba(251, 146, 60, 0.2)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { opacity: '0.02' },
          '50%': { opacity: '0.05' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
