/** @type {import('tailwindcss').Config} */
const themeTokens = require('./theme/index.js');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Map semantic token names → CSS variables
        // Usage: bg-background, text-foreground, border-border, etc.
        primary:    'var(--color-primary)',
        secondary:  'var(--color-secondary)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted:      'var(--color-muted)',
        accent:     'var(--color-accent)',
        border:     'var(--color-border)',
        card:       'var(--color-card)',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Lora', 'Georgia', 'serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            // Let globals.css handle prose variable overrides
            maxWidth: '68ch',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
