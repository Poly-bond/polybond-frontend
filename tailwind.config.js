/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pink: "#DC398C",
      purple_light: "#902784",
      purple_dark: "#2C338A",
      purple: "#68299A",
      blue_dark: "#02062B",
      blue_light: "#00A3DE",
      blue: "#0E67AB",
      grey_dark: "#222F38",
      grey_light: "#ABB0B3",
      grey: "#697278",
      black: '#000000',
      black_faint: "#11142C",
      white: '#ffffff',
    },
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
      "mono": ["monospace"]
    },
    extend: {},
  },
  plugins: [],
}
