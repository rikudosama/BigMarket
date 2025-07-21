/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0A500",
        secondary: "#334E58",
        accent: "#CE1126",
        dark: "#1A1A1A",
        light: "#F8F9FA",
      },
    },
  },
  plugins: [],
}
