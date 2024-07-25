/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'backgrounimagelogin': "url('/backgrounimage.svg')",
        'bgimg':"url('/bgimg.gif')"
      },
      colors:{
         
         'primary':'rgba(114, 134, 211, 1)',
         'second':'rgba(186, 186, 186, 1)',
         'ternary':'rgba(229, 224, 255, 0.22)',
         'bgcolor':'rgba(255, 242, 242, 1)',

      }

    },
  },
  plugins: [],
}