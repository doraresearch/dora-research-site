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
        dark: '#111412',
        ink: '#101310',
        paper: '#F7F4ED',
        surface: '#FBFAF5',
        field: '#EEF2E8',
        'soft-green': '#DDE8D2',
        'soft-green-hover': '#C9DABC',
        body: '#4F564D',
        muted: '#6B7568',
        white: '#FFFFFF',
        'warning-muted': '#E9D8B8',
        signal: '#B8C7A8',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: '#FBFAF5',
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
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          hover: '#C9DABC',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'rgba(16,19,16,0.12)',
        'border-strong': 'rgba(16,19,16,0.22)',
        'border-dark': 'rgba(247,244,237,0.14)',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [],
}
