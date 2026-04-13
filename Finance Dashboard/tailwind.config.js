/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0F0F13', 50: '#1a1a22', 100: '#242430' },
        cream: { DEFAULT: '#F5F0E8', dark: '#EAE4D6' },
        jade: { DEFAULT: '#00B37E', light: '#00D994', dark: '#008F62' },
        coral: { DEFAULT: '#FF6B6B', light: '#FF8E8E', dark: '#E55555' },
      },
    },
  },
  plugins: [],
};
