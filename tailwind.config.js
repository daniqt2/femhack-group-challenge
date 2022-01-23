module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "768px" },
        md: "769px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1900px"
      },
      colors: {
        disabled: ": #CCD4E0;",
        transparent: "transparent",
        current: "currentColor",

        black: "#000",
        white: "#fff",
        google: {
          blue: "#4285F4",
          green: "#0F9D58",
          yellow: "#F4B400",
          red: "#DB4437"
        },
        purple: {
          base: '#8267BE',
          dark: '#502064'
        },
        error: {
          base: "#E03E4E",
          100: "#FEF5F6",
          200: "#F5A3AB"
        },
        gray: {
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E7EAEE",
          400: "#D0D5DD",
          500: "#ACB5C3",
          600: "#7B838E",
          700: "#545A63",
          800: "#3B3D40",
          900: "#1D1E20"
        }
      }
    }
  },
  plugins: []
};
