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
      allMarkdownRemark(
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              isPublished
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
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: pageTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};
