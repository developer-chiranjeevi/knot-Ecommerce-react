const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors:{
      'primary':'#0d1b2a',
      'secondary':'#1b263b',
      'tertiary':'#415a77',
      'shade1':'#778da9',
      'shade2':'#e0e2dd',
      'white':'#ffffff',
      'black':"#000000",
      'red':'#fa0202'
      
    }
  },
  plugins: [],
});