module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-flexbugs-fixes"),
    require("postcss-import")({
      plugins: [require("stylelint")],
    }),
    require("postcss-preset-env")({
      autoprefixer: {
        grid: false,
      },
      features: {
        "nesting-rules": true,
        "custom-properties": false,
      },
      stage: 3,
      browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
    }),
  ],
};
