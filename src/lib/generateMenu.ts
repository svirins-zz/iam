import { graphql, useStaticQuery } from "gatsby";

import { MenuItem } from "@types";

export const generateMenu = (): MenuItem[] => {
  const {
    allMarkdownRemark,
  } = useStaticQuery<GatsbyTypes.MenuQueryQuery>(graphql`
    query MenuQuery {
      allMarkdownRemark(
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              isAtFooter
            }
          }
        }
      }
    }
  `);
  const generatedArray: MenuItem[] = allMarkdownRemark.edges
    .map((node) => {
      return {
        name: node?.node?.frontmatter?.slug,
        link: `/${node?.node?.frontmatter?.slug}`,
        isAtFooter: node?.node?.frontmatter?.isAtFooter,
      };
    })
    .sort((a: MenuItem, b: MenuItem) => b.name.length - a.name.length);

  return [
    {
      name: "index",
      link: "/",
      isAtFooter: true,
    },
    ...generatedArray,
    {
      name: "blog",
      link: "https://medium.com/@romamore",
      isAtFooter: true,
    },
  ];
};
