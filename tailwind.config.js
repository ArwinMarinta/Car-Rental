/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0D28A6",
        green: "#5CB85F",
        "lime-green": "#92D094",
        yellow: "#F9CC00",
        red: "#FA2C5A",
        green: "#5CB85F",
        abu: "#CFD4ED",
        "abu-putih": "#F1F3FF",
        border: "#D0D0D0",
      },

      fontFamily: {
        sans: "Helvetica,Arial, sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
