import { graphql, useStaticQuery } from "gatsby";

import { MenuItem } from "@types";

export const generateMenu = (): MenuItem[] => {
  const { allSanityPage } = useStaticQuery<GatsbyTypes.MenuQueryQuery>(graphql`
    query MenuQuery {
      allSanityPage(filter: { isPublished: { eq: true } }) {
        edges {
          node {
            isAtFooter
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const generatedArray: MenuItem[] = allSanityPage.edges
    .map((node) => {
      return {
        name: node?.node?.slug.current,
        link: `/${node?.node?.slug.current}`,
        isAtFooter: node?.node?.isAtFooter,
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
