
module.exports = {
  siteMetadata: {
    title: `Gatsby IAM`,
    description: `An example config of Gatsby + TypeScript + Tailwind CSS`,
    author: `@svirins`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        siteURL: 'https://deezign.cf',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'I AM',
        short_name: 'I AM',
        start_url: '/',
        display: 'browser',
        icon: 'src/images/iam.webp',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        anonymize: true,
      },
    },
  ],
}
