// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ['"Saira Extra Condensed"', 'sans-serif'],
      }, 
      colors : {
        ogyellow : "#fef08a", 
        ogblack : "#030712", 
      }
    },
  },
  plugins: [],
}
