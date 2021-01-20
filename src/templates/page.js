import { Template } from "components/templates";
import { graphql } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  return <Template data={data} />;
};

export const query = graphql`
  query($slug: String!) {
    allSanityPage(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          title
          price
          seoTitle
          seoDescription
          slug {
            current
          }
          image {
            asset {
              fluid(maxWidth: 2560) {
                ...GatsbySanityImageFluid
              }
            }
          }
          _rawText(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  }
`;
