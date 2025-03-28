/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#49C7AB",
          dark: "#",
          light: "#",
        },
        secondary: {
          DEFAULT: "#9333EA",
          dark: "#",
          light: "#",
        },
        background: {
          DEFAULT: "#F3F4F6",
          dark: "#1F2937",
        },
        text: {
          DEFAULT: "#475569",
          700: "#1E293B",
        },
      },
    },
  },
  plugins: [],
});
