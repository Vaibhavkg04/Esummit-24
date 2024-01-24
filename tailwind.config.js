
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        esubmit: "#06c3ff",
      },
      fontFamily: {
        Orbitron:["Orbitron","cursive","sans-serif"],
        Quicksand:['Quicksand'],
        Barlow:['Barlow'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}