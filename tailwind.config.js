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
