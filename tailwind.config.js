module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
     
      'orbitron': ['Orbitron'],
    },
    extend: {
      colors:{
        green:{
          DEFAULT:'#5c6ac4',
          dark:'#202e78',
        }
      }
    },
  },
  plugins: [],
}
