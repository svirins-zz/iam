module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    display: ["responsive", "hover", "focus", "grid", "hidden"],
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "sans-serif"],
      mono: ["Montserrat", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        // mobileColumns
        "5auto": "auto repeat(3, minmax(0, 1fr)) auto",
      },
      gridTemplateRows: {
        // mobileRows
        "6auto": "auto repeat(3, minmax(0, 1fr)) auto",
      },
    },
  },
  variants: {
    gridTemplateColumns: ["responsive", "hover", "focus"],
  },
  // add prose classes. see https://tailwindcss-typography.netlify.app/
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss"),
    require("@tailwindcss/custom-forms"),
  ],
};
