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
  const pageData = data.data.allSanityPage.edges[0].node;
  return (
    <Layout>
      <SEO
        seoTitle={pageData.seoTitle}
        seoDescription={pageData.seoDescription}
      />
      <Grid>
        <Left />
        <Header />
        <Square image={pageData.image.asset.fluid} />
        <Content
          portableText={pageData._rawText}
          price={pageData.price}
          title={pageData.title}
        />
        <Footer />
        <Right />
      </Grid>
    </Layout>
  );
};
