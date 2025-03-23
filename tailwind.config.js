 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./src/**/*.{html,js}",
    './index.html'
  ],
  theme: {
    extend: {      
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
    },},
  },
  plugins: [],
}