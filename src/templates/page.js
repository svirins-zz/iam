import { PageTemplate } from "components/templates";
import { graphql } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  return <PageTemplate pageData={data} />;
};

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            price
            text
            frontimage {
              publicURL
            }
          }
        }
      }
    }
  }
`;
