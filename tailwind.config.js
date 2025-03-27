/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#49C7AB", 
          dark: "#1E40AF",
          light: "#3B82F6", 
        },
        secondary: {
          DEFAULT: "#9333EA",
          dark: "#7E22CE",
          light: "#A855F7",
        },
        accent: "#F59E0B", 
        background: {
          DEFAULT: "#F3F4F6", 
          dark: "#1F2937", 
        },
        text: {
          DEFAULT: "#111827", 
          dark: "#E5E7EB", 
        },
      },
    },
  },
  plugins: [],
};
