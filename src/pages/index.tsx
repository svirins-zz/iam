import { MainPageContainer, PageLayout, SEO } from "components/layout";
import {
  BlogTile,
  BrandTile,
  DesignTile,
  LeftTile,
  MenuTile,
  RightTile,
  ThingTile,
} from "components/tiles";
import { Footer } from "components/ui";
import React from "react";

const IndexPage = (): JSX.Element => {
  return (
    <PageLayout>
      <SEO title="I AM" />
      <MainPageContainer>
        <LeftTile />
        <MenuTile />
        <DesignTile />
        <RightTile />
        <BrandTile />
        <BlogTile />
        <ThingTile />
        <Footer />
      </MainPageContainer>
    </PageLayout>
  );
};

export default IndexPage;
