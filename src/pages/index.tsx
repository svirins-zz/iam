import { MainPageContainer, PageLayout, SEO } from "components/layout";
import {
  BlogTile,
  BrandTile,
  DesignTile,
  LeftTile,
  MenuTile,
  RightTile,
  ThingTile,
  ZeroHeightTile,
} from "components/tiles";
import { Footer } from "components/ui";
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
    <PageLayout>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <MainPageContainer>
        <LeftTile />
        <MenuTile />
        <DesignTile />
        <RightTile />
        <BrandTile />
        <BlogTile />
        <ThingTile />
        <ZeroHeightTile />
        <Footer />
      </MainPageContainer>
    </PageLayout>
  );
};

export default IndexPage;
