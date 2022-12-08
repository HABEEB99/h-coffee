/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#FEF5EF",
        // darkBg:"#584B53",
        darkBg: "#11151C",
        banner: "#E4BB97",
        modal: "#212D40",
        btnC1: "#D66853",
        btnC2: "#7D4E57",
        header: "#364156",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
