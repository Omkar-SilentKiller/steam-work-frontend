/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGold: '#E49804',
        fff: '#FFFFFF',
        bg: '#1B1F25' ,
      },
    },
  },
  plugins: [],
}

