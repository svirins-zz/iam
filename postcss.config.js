module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-flexbugs-fixes"),
    require("postcss-import")({
      plugins: [
          require('stylelint')
      ]
  }),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: { grid: true },
      },
      features: {
        'nesting-rules': true
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
      browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
    }),
  ],
}
