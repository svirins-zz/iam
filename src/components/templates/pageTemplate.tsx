import { InnerPageContainer, PageLayout, SEO } from "components/layout";
import {
  DesignTile,
  ImageTile,
  LeftTile,
  MenuTile,
  RightTile,
} from "components/tiles";
import { Description, Footer, PriceBar } from "components/ui";
import React from "react";

import styled from "@emotion/styled";

const BigSquare = styled.section`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  grid-area: 2 / 2 / 5 / 5;
`;

export const PageTemplate = (data): JSX.Element => {
  const { publicURL } = data.pageData.allFile.edges[0].node;
  const { frontmatter } = data.pageData.allMarkdownRemark.edges[0].node;
  return (
    <PageLayout>
      <SEO title="Design" />
      <InnerPageContainer>
        <LeftTile />
        <MenuTile />
        <DesignTile />
        <RightTile />
        <BigSquare>
          <ImageTile alt={frontmatter.slug} url={frontmatter.frontimage} />
        </BigSquare>
        <PriceBar title={frontmatter.title} price={frontmatter.price} />
        <Description title={frontmatter.title} html={frontmatter.text} />
        <Footer />
      </InnerPageContainer>
    </PageLayout>
  );
};
