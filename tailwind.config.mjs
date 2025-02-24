/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gym-blue': {
          100: '#E6F0FF',
          200: '#B8D5FF',
          300: '#8AB9FF',
          400: '#5C9EFF',
          500: '#2E82FF',
          600: '#0066FF',
          700: '#0052CC',
          800: '#003D99',
          900: '#002966'
        }
      }
    }
  },
  plugins: []
}