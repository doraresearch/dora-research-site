/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        none: '0',
        sm: '6px',
        DEFAULT: '10px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        full: '9999px',
      },
      colors: {
        canvas: 'rgb(var(--zora-color-surface-canvas-rgb) / <alpha-value>)',
        surface: 'rgb(var(--zora-color-surface-raised-rgb) / <alpha-value>)',
        subtle: 'rgb(var(--zora-color-surface-subtle-rgb) / <alpha-value>)',
        'section-band': 'rgb(var(--zora-color-surface-section-band-rgb) / <alpha-value>)',
        selected: 'rgb(var(--zora-color-surface-selected-rgb) / <alpha-value>)',
        ink: 'rgb(var(--zora-color-text-primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--zora-color-text-secondary-rgb) / <alpha-value>)',
        inverse: 'rgb(var(--zora-color-text-inverse-rgb) / <alpha-value>)',
        action: {
          DEFAULT: 'rgb(var(--zora-color-action-primary-rgb) / <alpha-value>)',
          hover: 'rgb(var(--zora-color-action-hover-rgb) / <alpha-value>)',
          deep: 'rgb(var(--zora-color-action-hover-rgb) / <alpha-value>)',
          pressed: 'rgb(var(--zora-color-action-pressed-rgb) / <alpha-value>)',
        },
        deep: 'rgb(var(--zora-color-action-hover-rgb) / <alpha-value>)',
        context: 'rgb(var(--zora-color-action-soft-rgb) / <alpha-value>)',
        control: 'rgb(var(--zora-color-border-strong-rgb) / <alpha-value>)',
        focus: 'rgb(var(--zora-color-focus-ring-rgb) / <alpha-value>)',
        line: {
          DEFAULT: 'rgb(var(--zora-color-border-subtle-rgb) / <alpha-value>)',
          soft: 'rgb(var(--zora-color-border-subtle-rgb) / <alpha-value>)',
          graph: 'rgb(var(--zora-color-border-subtle-rgb) / <alpha-value>)',
        },
        warning: {
          DEFAULT: 'rgb(var(--zora-color-status-warning-rgb) / <alpha-value>)',
          tint: 'rgb(var(--zora-color-status-warning-soft-rgb) / <alpha-value>)',
        },
        risk: {
          DEFAULT: 'rgb(var(--zora-color-status-risk-rgb) / <alpha-value>)',
          tint: 'rgb(var(--zora-color-status-risk-soft-rgb) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'rgb(var(--zora-color-status-success-rgb) / <alpha-value>)',
          tint: 'rgb(var(--zora-color-status-success-soft-rgb) / <alpha-value>)',
        },
        dark: '#0D1511',

        base: 'rgb(var(--zora-color-surface-canvas-rgb) / <alpha-value>)',
        sage: 'rgb(var(--zora-color-action-soft-rgb) / <alpha-value>)',
        muted: 'rgb(var(--zora-color-text-secondary-rgb) / <alpha-value>)',
        green: {
          DEFAULT: 'rgb(var(--zora-color-action-primary-rgb) / <alpha-value>)',
          deep: 'rgb(var(--zora-color-action-hover-rgb) / <alpha-value>)',
        },
        orange: 'rgb(var(--zora-color-status-risk-rgb) / <alpha-value>)',
        yellow: 'rgb(var(--zora-color-status-warning-soft-rgb) / <alpha-value>)',
        white: 'rgb(var(--zora-color-surface-raised-rgb) / <alpha-value>)',
      },
      transitionDuration: {
        160: '160ms',
        240: '240ms',
        600: '600ms',
      },
      keyframes: {
        'swarm-spin': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'logo-spin': 'swarm-spin 22s linear infinite',
      },
      boxShadow: {
        overlay: '0 2px 8px -2px rgba(13,21,17,.06), 0 16px 32px -12px rgba(13,21,17,.14)',
      },
    },
  },
  plugins: [],
}
