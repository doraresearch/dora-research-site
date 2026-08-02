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
        // Living Knowledge palette (see design_handoff_zora_redesign/README.md)
        base: '#F7F5EF', // warm white — primary background
        sage: '#E4EADF', // pale sage — secondary background, skeleton fills
        ink: '#17251F', // forest ink — primary text, footer surface
        muted: '#66716A', // moss grey — secondary text
        green: {
          DEFAULT: '#3D8B68', // living green — CTAs, links, sources, eyebrows
          deep: '#2F7355', // CTA hover
        },
        orange: '#FF785A', // signal orange — discoveries, active nodes, pulses ONLY
        yellow: '#F3D56B', // soft yellow — marker highlights
        line: {
          DEFAULT: '#D8DFD2',
          soft: '#EDEFE6',
          graph: '#C9D2C2',
        },
        white: '#FFFFFF',
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
    },
  },
  plugins: [],
}
