/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#010a5e',
        primaryColorLight: "#010d78",
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',      
        whiteColor: '#fff',
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorLight: "#171717",
      },
    },
  },
  plugins: [],
}