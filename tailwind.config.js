/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        none: '0',
        sm: '6px',
        DEFAULT: '12px',
        md: '14px',
        lg: '18px',
        xl: '20px',
        '2xl': '26px',
        full: '9999px',
        // semantic (per DESIGN.md rounded scale)
        panel: '12px',
        card: '18px',
        stage: '26px',
        pill: '9999px',
      },
      backgroundImage: {
        // Aurora spectral signature (cool, purple-free)
        spectral: 'linear-gradient(90deg,#6EE7B7,#2DD4BF,#22D3EE,#38BDF8,#3B82F6)',
        'spectral-v': 'linear-gradient(180deg,#6EE7B7,#2DD4BF,#22D3EE,#38BDF8,#3B82F6)',
      },
      colors: {
        dark: '#0C0F14',
        graphite: '#0C0F14',
        'olive-black': '#0C0F14',
        ink: '#050608',
        base: '#FFFFFF',
        soft: '#F7F8FA',
        paper: '#F7F8FA',
        surface: '#FFFFFF',
        'surface-alt': '#EEF1F4',
        body: '#3B4148',
        white: '#FFFFFF',
        // Aurora stops
        mint: '#6EE7B7',
        teal: '#2DD4BF',
        cyan: '#22D3EE',
        sky: '#38BDF8',
        blue: '#3B82F6',
        // signal system
        signal: '#7DD3FC',
        signal2: '#38BDF8',
        'signal-soft': '#E0F7FF',
        'deep-signal': '#0369A1',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: '#6F7782',
          foreground: '#6F7782',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          hover: '#050608',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: '#E4E8ED',
        line: '#E4E8ED',
        'line-strong': '#AEB7C2',
        'border-strong': '#AEB7C2',
        'border-dark': 'rgba(248,250,252,0.16)',
        'dark-text': '#F8FAFC',
        'dark-muted': '#CBD5E1',
        'dark-panel': '#11151b',
        'dark-deeper': '#0c1620',
        'dark-line': '#232b35',
        'dark-line-accent': '#2e3a47',
        'dark-label': '#9aa3ad',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'swarm-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        'core-pulse': {
          '0%,100%': { opacity: '0.65' },
          '50%': { opacity: '1' },
        },
        'cell-pulse': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up': 'fade-up .75s cubic-bezier(0.22,1,0.36,1) both',
        'logo-spin': 'swarm-spin 22s linear infinite',
        'eval-spin': 'swarm-spin 16s linear infinite',
        'core-pulse': 'core-pulse 3.2s ease-in-out infinite',
        'cell-pulse': 'cell-pulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
