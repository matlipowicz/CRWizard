import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      'phone-small': '340px',
      phone: '515px',
      'phone-large': '640px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      'desktop-large': '1400px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      spacing: {
        '100': '30rem',
        '104': '34rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          green_10: 'hsl(var(--green-1))',
          green_20: 'hsl(var(--green-2))',
          green_30: 'hsl(var(--green-3))',
          green_40: 'hsl(var(--green-4))',
          green_50: 'hsl(var(--green-5))',
          green_60: 'hsl(var(--green-6))',
          green_70: 'hsl(var(--green-7))',
          green_80: 'hsl(var(--green-8))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          background: 'hsl(var(--destructive-bg))',
          border: 'hsl(var(--destructive-border))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gradient_light: {
          DEFAULT: 'hsl(var(--gradient-light-green))',
          foreground: 'hsl(var(--gradient-light-green-foreground))',
        },
        gradient_dark: {
          DEFAULT: 'hsl(var(--gradient-dark-green))',
          foreground: 'hsl(var(--gradient-dark-green-foreground))',
        },
        description: {
          DEFAULT: 'hsl(var(--light-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
