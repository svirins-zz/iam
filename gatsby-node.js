exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  config.node = {
    fs: "empty",
  };
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const pageTemplate = require.resolve(`./src/templates/page.js`);
  const result = await graphql(`
    {
      allSanityPage(filter: { isPublished: { eq: true } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allSanityPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: pageTemplate,
      context: {
        // additional data can be passed via context
        slug: node.slug.current,
      },
    });
  });
};
