import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      backgroundColor: {
        'dark-bg': '#0A0A0A',
        'dark-card': '#111827',
        'light-bg': '#FFFFFF',
        'light-card': '#F9FAFB',
      },
      borderColor: {
        'dark-border': '#1F2937',
        'light-border': '#E5E7EB',
      },
      textColor: {
        'dark-text': '#F9FAFB',
        'light-text': '#111827',
        'secondary': '#6B7280',
      },
    },
  },
  plugins: [],
};

export default config;
