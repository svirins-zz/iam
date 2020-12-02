import { graphql, useStaticQuery } from "gatsby";

import { MenuItem } from "@types";

export const generateMenu = (): MenuItem[] => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MenuQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(allMarkdownRemark);
  const generatedArray: MenuItem[] = allMarkdownRemark.edges
    .map((node) => {
      return {
        name: node.node.frontmatter.slug,
        link: `/${node.node.frontmatter.slug}`,
      };
    })
    .sort((a, b) => a.name.length > b.name.length);
  // TODO: implement sorting
  return [
    {
      name: "index",
      link: "/",
    },
    ...generatedArray,
    {
      name: "my blog",
      link: "https://medium.com/@romamore",
    },
  ];
};
