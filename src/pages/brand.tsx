import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Layout, SEO } from "components/layout";
import {
  Wrapper,
  InnerPageContainer,
  ImageTile,
  Footer,
  Description,
  PriceBar,
} from "components/ui";
import { IMAGES } from "../const";

const Left = styled.aside`
  grid-area: 1 / 1 / 7 / 2;
`;

const Brand = styled.section`
  ${tw`hover:border-yellow-300 z-40 border-2 border-transparent`}
  grid-area: 1 / 1 / 4 / 4;
`;

const Right = styled.aside`
  grid-area: 1 / 5 / 7 / 6;
`;

const BrandPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="I AM" />
      <Wrapper>
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
      </Wrapper>
    </Layout>
  );
};

export default BrandPage;
