require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

module.exports = {
  siteMetadata: {
    title: "Roma Hur Dezign",
    description: "Roma Hur personal website description",
    author: "@romamore",
    siteURL: "https://deezign.cf",
    lang: "ru",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/@romamore`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/@romahur`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@romamore`,
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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/@types/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "z6g21owr",
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-sanity-image",
    //   options: {
    //     // Sanity project info (required)
    //     projectId: "z6g21owr",
    //     dataset: "production",
    //     fragmentName: "Image",
    //     fragmentTypeName: "SanityImage",
    //     includeFragments: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N3GZKDM",
        defaultDataLayer: { platform: "gatsby" },
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
            {
              family: `Source Serif Pro`,
              subsets: [`cyrillic-ext`],
              variants: [`400`, `600`, `700`],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Romamore Dezign",
        short_name: "Romamore Dezign",
        description: `Romamore personal website`,
        start_url: "/",
        lang: "ru",
        display: "standalone",
        icon: "src/assets/svg/brand.svg",
        background_color: "#101010",
        theme_color: "#20263d",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
