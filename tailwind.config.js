// tailwind.config.js
export default {
   darkMode: "class",
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {
      spacing: {
        120: "30rem", // 👈 Adds w-120/h-120 utility
      },
       colors: {
         background: "#FFFFFF",
         lightGray: "#E5E5E5",
         darkMatte: "#0e0e0e",
         darkSurface: "#1c1c1c",
         textDark: "#d1d1d1",
         gold: "#FCA311",
         darkNavy: "#14213D", // optional: for headings in light mode
       },
     },
   },
   plugins: [],
 };
 