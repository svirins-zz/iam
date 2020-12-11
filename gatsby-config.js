require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

module.exports = {
  siteMetadata: {
    title: "Romamore Dezign",
    description: "Romamore personal website description",
    author: "@romamore",
    siteURL: "https://deezign.cf",
    lang: "ru",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/svirins`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `medium`,
        url: `https://facebook.com/@romamore`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/etreugly`,
      },
    ],
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-netlify",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "I AM",
        short_name: "I AM",
        start_url: "/",
        display: "browser",
        icon: "src/assets/svg/brand.svg",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              subsets: [`cyrillic-ext`],
              variants: [`400`, `500`, `700`, `800`],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/@types/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
};
