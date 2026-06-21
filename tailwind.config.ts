import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        'surface-2': 'hsl(var(--surface-2) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        line: 'hsl(var(--border) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-2': 'hsl(var(--muted-2) / <alpha-value>)',
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          hi: 'hsl(var(--accent-hi) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        success: 'hsl(var(--success) / <alpha-value>)',
        danger: 'hsl(var(--danger) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.625rem',
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        gold: '0 8px 30px -8px hsl(var(--accent) / 0.35)',
        'gold-sm': '0 2px 14px -4px hsl(var(--accent) / 0.30)',
        panel: '0 1px 0 0 hsl(0 0% 100% / 0.03) inset, 0 24px 60px -30px hsl(0 0% 0% / 0.8)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, hsl(var(--accent-hi)) 0%, hsl(var(--accent)) 55%, hsl(38 55% 38%) 100%)',
        'gold-text': 'linear-gradient(180deg, hsl(var(--accent-hi)) 0%, hsl(var(--accent)) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        shimmer: 'shimmer 2.4s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
