/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        primary : "#008053",
        chatbg : "#F2F3F3",
        btnRed : "#FC5252"
      },
      fontFamily : {
        inter : "Inter"
      }
    },
  },
  plugins: [],
}
