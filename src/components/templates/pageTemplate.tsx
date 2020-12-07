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
  border: 0.75rem solid transparent;
  border-image-slice: 1;
  border-width: 0.75rem;
  grid-area: 2 / 2 / 5 / 5;
`;

// define style templates for markdown replacement

export const PageTemplate = (data): JSX.Element => {
  const { frontmatter } = data.pageData.allMarkdownRemark.edges[0].node;
  console.log(frontmatter.frontimage.publicURL);
  return (
    <PageLayout>
      <SEO title="Design" />
      <InnerPageContainer>
        <LeftTile />
        <MenuTile />
        <DesignTile />
        <RightTile />
        <BigSquare>
          <ImageTile
            alt={frontmatter.slug}
            url={frontmatter.frontimage.publicURL}
          />
        </BigSquare>
        <PriceBar title={frontmatter.title} price={frontmatter.price} />
        <Description title={frontmatter.title} markdown={frontmatter.text} />
        <Footer />
      </InnerPageContainer>
    </PageLayout>
  );
};
