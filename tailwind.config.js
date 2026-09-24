import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        github: {
          dark: 'rgb(var(--github-dark) / <alpha-value>)',
          subtle: 'rgb(var(--github-subtle) / <alpha-value>)',
          muted: 'rgb(var(--github-muted) / <alpha-value>)',
          border: 'rgb(var(--github-border) / <alpha-value>)',
          'border-subtle': 'rgb(var(--github-border-subtle) / <alpha-value>)',
          text: 'rgb(var(--github-text) / <alpha-value>)',
          'text-secondary': 'rgb(var(--github-text-secondary) / <alpha-value>)',
          'text-muted': 'rgb(var(--github-text-muted) / <alpha-value>)',
          accent: '#2f81f7',
          'accent-emphasis': '#1f6feb',
          success: '#238636',
          'success-emphasis': '#2ea043',
          danger: '#da3633',
          warning: '#d29922',
          purple: '#8957e5',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Noto Sans"',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
    },
  },
  plugins: [typography],
}
