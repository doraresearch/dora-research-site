/** @type {import('tailwindcss').Config} */
// Paper and Night, DESIGN.md v2.0. The color set is closed on purpose: nothing outside it may appear on a surface.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Paper (the lab)
      paper: '#F9F7F2',
      evidence: '#EDEAE2',
      ink: '#141D18',
      pencil: '#566460',
      rule: '#D5D1C7',
      green: '#2A6449',
      risk: '#AD3547',
      // reserved, mark only
      living: '#3D8B68',
      cyan: '#03F5F2',
      // Night (Zora)
      night: '#0A0F0C',
      raised: '#131E18',
      subtle: '#19261F',
      nline: '#2B3932',
      nstrong: '#5D6C64',
      npaper: '#F5F7F2',
      ash: '#A4B1AA',
      mint: '#67BF99',
      rose: '#F08A9A',
    },
    fontFamily: {
      serif: ['var(--serif)'],
      sans: ['var(--sans)'],
      mono: ['var(--mono)'],
    },
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
    },
    extend: {
      maxWidth: {
        rail: '1280px',
        reading: '680px',
      },
      transitionDuration: {
        120: '120ms',
        160: '160ms',
        240: '240ms',
      },
      transitionTimingFunction: {
        house: 'cubic-bezier(.2, 0, 0, 1)',
      },
      keyframes: {
        arrive: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        arrive: 'arrive 160ms cubic-bezier(.2, 0, 0, 1) both',
      },
    },
  },
  plugins: [],
}
