import { Template } from "components/templates";
import { graphql } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  return <Template pageData={data} />;
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
            seoTitle
            seoDescription
            image {
              publicURL
            }
            text
          }
        }
      }
    }
    allFile(filter: { name: { eq: $slug }, extension: { eq: "svg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
