/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FF9D00",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        publicSans: ['Public Sans', 'sans-serif'],

      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
