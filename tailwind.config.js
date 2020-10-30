const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  corePlugins: {
    borderCollapse: false,
    container: false,
    clear: false,
    flex: false,
    flexDirection: false,
    flexGrow: false,
    flexShrink: false,
    flexWrap: false,
    float: false,
    height: false,
    inset: false,
    margin: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    order: false,
    overflow: false,
    overscrollBehavior: false,
    padding: false,
    position: false,
    space: false,
    tableLayout: false,
    width: false,
  },
  display: ["responsive", "hover", "focus", "grid", "hidden"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // set default values for container
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
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  // add prose classes. see https://tailwindcss-typography.netlify.app/
  plugins: [require("@tailwindcss/typography")],
};
