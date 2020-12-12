import { Grid, Layout, SEO } from "components/layout";
import {
  Content,
  Footer,
  Header,
  Left,
  Right,
  Square,
} from "components/ui/grid";
import React from "react";

export const Template = (data): JSX.Element => {
  const { frontmatter } = data.pageData.allMarkdownRemark.edges[0].node;
  const imageProps = [
    {
      url: frontmatter.image.publicURL,
      alt: frontmatter.title,
    },
  ];
  return (
    <Layout>
      <SEO
        seoTitle={frontmatter.seoTitle}
        seoDescription={frontmatter.seoDescription}
      />

      <Grid>
        <Left />
        <Header />
        <Square {...imageProps} />
        <Content frontmatter={frontmatter} />
        <Footer />
        <Right />
      </Grid>
    </Layout>
  );
};
