/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue1:"#02005e",
        red: "#DC4492",
        yellow: "#FDCC49",
        
      },
      fontFamily:{
        Poppins :"Poppins",
        Pacifico:["Pacifico", "cursive"]
      }
    },
  },
  plugins: [],
}

