const PAGES = [
  {
    name: "brand",
  },
  {
    name: "design",
  },
  {
    name: "idea",
  },
  {
    name: "logo",
  },
  {
    name: "poster",
  },
  {
    name: "pro",
  },
  {
    name: "smm",
  },
  {
    name: "thing",
  },
];

const filterEdges = (name) => (edges) =>
  edges.filter((edge) => edge.node.fields.slug === name);

const buildPagesGenerator = ({ edges, createPage }) => ({ name }) => {
  const filteredEdges = filterEdges(name)(edges);
  // create individual pages
  filteredEdges.forEach((edge, index) => {
    const { slug } = edge.node.fields;
    const previous = index === edges.length - 1 ? null : edges[index + 1].node;
    const next = index === 0 ? null : edges[index - 1].node;
    createPage({
      path: slug,
      component: require.resolve(`../src/templates/page.js`),
      context: { slug, previous, next },
    });
  });

module.exports = async function ({ actions, graphql }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const pagesGenerator = buildPagesGenerator({
    edges: data.allMarkdownRemark.edges,
    createPage,
  });

  PAGES.forEach(pagesGenerator);
};
