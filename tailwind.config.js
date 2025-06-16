/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        accent: "#ff3333",
        light: "#ffffff",
        dark: "#000000",
        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121"
        }
      },
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
        display: ['Clash Display', 'sans-serif']
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    }
  },
  plugins: []
};
