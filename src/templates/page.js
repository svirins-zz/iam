import { PageTemplate } from "components/ui";
import { graphql } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  return <PageTemplate pageData={data.allMarkdownRemark.nodes[0]} />;
};

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      nodes {
        html
        frontmatter {
          price
          slug
          title
          url
        }
      }
    }
  }
`;
