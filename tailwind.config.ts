import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        // Base sizes
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Custom larger sizes
        'huge': ['10rem', { lineHeight: '1' }],
        'giant': ['12rem', { lineHeight: '1' }],
        'mega': ['14rem', { lineHeight: '1' }],
      },
      colors: {
        primary: {
          DEFAULT: '#1a6cad',
          dark: '#145689',
          light: '#2d7fc0',
        },
        secondary: {
          DEFAULT: '#f8ce51',
          dark: '#f6c32c',
          light: '#f9d976',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;