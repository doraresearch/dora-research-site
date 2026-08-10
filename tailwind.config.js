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
        md: '12px',
        lg: '18px',
        xl: '20px',
        full: '9999px',
        card: '18px',
        window: '20px',
        pill: '9999px',
      },
      colors: {
        // Porcelain Intelligence
        canvas: '#F7F6F1',
        surface: '#FFFEFB',
        subtle: '#F0EFE9',
        selected: '#E7ECE8',
        ink: '#111814',
        secondary: '#48564F',
        inverse: '#F9FAF7',
        action: {
          DEFAULT: '#145C43',
          deep: '#0C4935',
          pressed: '#063425',
        },
        deep: '#0C4935',
        context: '#DCECE4',
        control: '#838F89',
        focus: '#1D63D8',
        line: {
          DEFAULT: '#DCE1DC',
          soft: '#DCE1DC',
          graph: '#DCE1DC',
        },
        risk: {
          DEFAULT: '#B0442E',
          tint: '#F6E3DB',
        },
        evidence: {
          DEFAULT: '#805D05',
          highlight: '#F3E3A4',
        },
        highlight: '#F3E3A4',
        dark: '#101915',

        // Compatibility aliases used by the existing component system.
        base: '#F7F6F1',
        sage: '#DCECE4',
        muted: '#48564F',
        green: {
          DEFAULT: '#145C43',
          deep: '#0C4935',
        },
        orange: '#B0442E',
        yellow: '#F3E3A4',
        white: '#FFFEFB',
      },
      keyframes: {
        'swarm-spin': { to: { transform: 'rotate(360deg)' } },
        'node-pulse': { '0%,100%': { opacity: '1' }, '50%': { opacity: '.35' } },
        'wordmark-shimmer': {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '300% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'logo-spin': 'swarm-spin 22s linear infinite',
        'node-pulse': 'node-pulse 2.4s ease-in-out infinite',
        'fade-up': 'fade-up .75s cubic-bezier(0.22,1,0.36,1) both',
      },
      boxShadow: {
        overlay: '0 2px 8px -2px rgba(13,21,17,.06), 0 16px 32px -12px rgba(13,21,17,.14)',
      },
    },
  },
  plugins: [],
}
