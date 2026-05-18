/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
      },
      colors: {
        dark: '#111418',
        graphite: '#111418',
        ink: '#050608',
        base: '#F7F8FA',
        paper: '#F7F8FA',
        surface: '#FFFFFF',
        'surface-alt': '#EEF1F4',
        body: '#3B4148',
        white: '#FFFFFF',
        signal: '#7DD3FC',
        'signal-soft': '#E0F7FF',
        'deep-signal': '#0284C7',
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
        border: '#DCE1E6',
        line: '#DCE1E6',
        'line-strong': '#AEB7C2',
        'border-strong': '#AEB7C2',
        'border-dark': 'rgba(248,250,252,0.16)',
        'dark-text': '#F8FAFC',
        'dark-muted': '#CBD5E1',
        'olive-black': '#111418',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [],
}
