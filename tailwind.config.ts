import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0C14',
        surface: '#111827',
        'surface-2': '#1A2235',
        accent: '#00D4FF',
        'accent-dark': '#0099CC',
        muted: '#6B7280',
        'text-primary': '#F0F4FF',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
        'wa-pulse': 'waPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'count-up': 'countUp 1s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        waPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'hero-grid': `
          radial-gradient(circle at 25px 25px, rgba(0,212,255,0.06) 2px, transparent 0),
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        'gradient-accent': 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
        'gradient-dark': 'linear-gradient(135deg, #0A0C14, #111827)',
        'card-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.05) 50%, transparent 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'accent': '0 0 30px rgba(0,212,255,0.25)',
        'accent-lg': '0 0 60px rgba(0,212,255,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}

export default config
