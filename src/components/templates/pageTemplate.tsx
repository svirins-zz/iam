import { InnerPageContainer, PageLayout, SEO } from "components/layout";
import {
  BlogSlimTile,
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

export const PageTemplate = (data): JSX.Element => {
  const { frontmatter, image } = data.pageData.allMarkdownRemark.edges[0].node;
  console.log(image.publicURL)
  return (
    <PageLayout>
      <SEO
        title={frontmatter.seotitle}
        description={frontmatter.seodescription}
      />
      <InnerPageContainer>
        <LeftTile />
        <MenuTile />
        <DesignTile />
        <RightTile />
        <BigSquare>
          <ImageTile
            alt={frontmatter.slug}
            url={data.pageData.allFile.edges[0].node.publicURL}
          />
        </BigSquare>
        <PriceBar title={frontmatter.title} price={frontmatter.price} />
        <Description title={frontmatter.title} markdown={frontmatter.text} />
        <BlogSlimTile tag={frontmatter.slug} />
        <Footer />
      </InnerPageContainer>
    </PageLayout>
  );
};
