/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryBlack: "#181818",
        PrimaryGrayDark: "#1D1D1D",
        PrimaryGrayLight: "#333333",
        PrimaryGrayLighter: "#717171",
        PrimaryGrayTextLight: "#6A6A6A",
        PrimaryGrayText:"#C2C2C2",
        PrimaryWhiteText: "#FFFFFF",
        PrimaryBlue: "#509FFF",
        PrimaryGrayHover: "#2E2E2E",
        PrimaryGrayIcons: "#676767"
      },
    },
  },
  plugins: [],
}

