import { Grid, Layout, SEO } from "components/layout";
import {
  Bar,
  Footer,
  Header,
  Left,
  Right,
  SquareFront,
} from "components/ui/grid";
import { STATIC_TILES } from "const";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
const IndexPage = (): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO
        seoTitle={site.siteMetadata.title}
        seoDescription={site.siteMetadata.description}
      />
      <Grid>
        <Left />
        <Header />
        <SquareFront {...STATIC_TILES.find((e) => e.alt === "brand")} />
        <Bar />
        <Footer />
        <Right />
      </Grid>
    </Layout>
  );
};

export default IndexPage;
