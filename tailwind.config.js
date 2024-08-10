/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'custom-orange-flare': "0 0 1rem custom-orange"
      },
      screens: {
      },
      colors: {
        custom: {
          dark: "#19191d",
          "off-dark": {
            300: "#615E6E",
            800: "#2C2B32",
          },
          text: {
            100: "#E1E1E1",
            300: "#AEADB8",
          },
          blue: "#68A9F6",
          "off-blue": "#8EA5F8",
          red: "#F16D70",
          orange: "#F0B65A",
          yellow: "#F8EC81",
          green: "#9EB551",
          "light-green": "#8AC67B",
          pink: "#D68EE4",
        },
      },
      spacing: {
        "window-buttons": "0.9rem",
        "header": "3rem",
        "footer": "3.5rem",
      },
    },
  },
  plugins: [],
};
