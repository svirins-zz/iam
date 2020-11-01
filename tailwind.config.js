const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    display: ["responsive", "hover", "focus", "grid", "hidden"],
    screens: {
      mobile: "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "sans-serif"],
      mono: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  // add prose classes. see https://tailwindcss-typography.netlify.app/
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss"),
    require("@tailwindcss/custom-forms"),
  ],
};
