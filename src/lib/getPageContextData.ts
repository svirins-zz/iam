import { graphql, useStaticQuery } from "gatsby";

import { useLocation } from "@reach/router";
import { ContentProps } from "@types";

export const getPageContextData = (): ContentProps => {
  const { pathname } = useLocation();
  const { allMarkdownRemark } = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            price
            slug
            url
            title
          }
          html
        }
      }
    }
  `);
  console.log(pathname);
  const { frontmatter, html } = allMarkdownRemark.nodes.find(
    (node: ContentProps) => {
      return node.frontmatter.slug === pathname.replace(/\//g, "");
    }
  );
  return { frontmatter, html };
};
