/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{svelte,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        sans:["DM Sans"],
        mono:["Space Mono"]
      }
    },
  },
  darkMode:"class",
  plugins: [],
}

