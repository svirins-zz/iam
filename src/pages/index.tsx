import { PageLayout, SEO } from "components/layout";
import { MenuTile } from "components/tiles";
import { Footer, ImageTile, MainPageContainer } from "components/ui";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

import { IMAGES } from "../const";

const Left = styled.aside`
  grid-area: 1 / 1 / 7 / 2;
`;

const Menu = styled.header`
  ${tw`hover:border-yellow-300 border-4 border-transparent`}
  grid-area: 1 / 2 / 2 / 3;
`;

const Blank = styled.header`
  ${tw`border-4 border-transparent`}
  grid-area: 1 / 3 / 2 / 5;
`;

const Brand = styled.section`
  ${tw`hover:border-yellow-300 border-4 border-transparent`}
  grid-area: 2 / 2 / 5 / 5;
`;

const Bauhaus = styled.section`
  ${tw`border-4 border-transparent`}
  grid-area: 5 / 2 / 6 / 4;
`;

const Thing = styled.section`
  ${tw`hover:border-yellow-300 border-4 border-transparent`}
  grid-area: 5 / 4 / 6 / 5;
`;

const Right = styled.aside`
  grid-area: 1 / 5 / 7 / 6;
`;

const IndexPage = (): JSX.Element => {
  return (
    <PageLayout>
      <SEO title="I AM" />
      <MainPageContainer>
        <Left />
        <Menu>
          <MenuTile />
        </Menu>
        <Blank />
        <Right />
        <Brand>
          <Link to="brand">
            <ImageTile {...IMAGES.find((e) => e.alt === "brand")} />
          </Link>
        </Brand>
        <Bauhaus>
          <ImageTile {...IMAGES.find((e) => e.alt === "bauhaus")} />
        </Bauhaus>
        <Thing>
          <Link to="thing">
            <ImageTile {...IMAGES.find((e) => e.alt === "thing")} />
          </Link>
        </Thing>
        <Footer />
      </MainPageContainer>
    </PageLayout>
  );
};

export default IndexPage;
