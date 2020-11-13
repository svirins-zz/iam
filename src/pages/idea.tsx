import { PageLayout, SEO } from "components/layout";
import {
  Description,
  Footer,
  ImageTile,
  InnerPageContainer,
  PriceBar,
} from "components/ui";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

import { IMAGES } from "../const";

const Left = styled.aside`
  grid-area: 1 / 1 / 7 / 3;
`;

const Brand = styled.section`
  ${tw`hover:border-yellow-300 border-2 border-transparent`}
  grid-area: 1 / 2 / 4 / 5;
`;

const Right = styled.aside`
  grid-area: 1 / 5 / 7 / 6;
`;

const IdeaPage = (): JSX.Element => {
  return (
    <PageLayout>
      <SEO title="I AM" />
      <InnerPageContainer>
        <Left />
        <Brand>
          <ImageTile {...IMAGES[2]} />
        </Brand>
        <Right />
        <PriceBar title="Branding" price="200" />
        <Description title="Branding" description="igogosha" />
        <Footer />
      </InnerPageContainer>
    </PageLayout>
  );
};

export default IdeaPage;
