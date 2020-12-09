import "styles/body-classes.css";

import { myContext } from "context";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";

export const SEO = ({
  seoTitle,
  seoDescription,
}: {
  seoTitle: string;
  seoDescription: string;
}): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  );
  const context = useContext(myContext);
  const className =
    context.menuVisible?.isVisible || context.modalVisible?.isVisible
      ? "scroll-off"
      : "scroll-on";
  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.lang ?? "en",
      }}
      bodyAttributes={{ class: className }}
      title={`${site.siteMetadata.title} | ${seoTitle}`}
      meta={[
        {
          name: `charSet`,
          content: "utf-8",
        },
        {
          name: `description`,
          content: seoDescription ?? site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: seoTitle ?? site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: seoDescription ?? site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: seoTitle ?? site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: seoDescription ?? site.siteMetadata.description,
        },
      ]}
    />
  );
};
