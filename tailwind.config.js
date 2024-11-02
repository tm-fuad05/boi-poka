/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23be0a",
        secondary: "#59c6d2",
        primary2: "#f4fcf3",
        para: "#131313CC",
        hero: "#f3f3f3",
      },
      fontFamily: {
        worksans: "Work Sans",
        playfair: "Playfair Display",
      },
    },
  },
  plugins: [require("daisyui")],
};
