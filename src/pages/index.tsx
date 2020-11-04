import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { IMAGES } from "../const";
import { Layout, SEO } from "components/layout";
import { Wrapper, MainPageContainer, ImageTile, Footer } from "components/ui";

const Left = styled.aside`
  grid-area: 1 / 1 / 7 / 2;
`;

const Logo = styled.header`
  ${tw`hover:border-yellow-300 z-40 border-2 border-transparent`}
  grid-area: 1 / 2 / 2 / 3;
`;

const Dezign = styled.header`
  ${tw`hover:border-yellow-300 z-40 border-2 border-transparent`}
  grid-area: 1 / 3 / 2 / 5;
`;

const Brand = styled.section`
  ${tw`hover:border-yellow-300 z-40 border-2 border-transparent`}
  grid-area: 2 / 2 / 5 / 5;
`;

const Bauhaus = styled.section`
  ${tw`hover:border-yellow-300 z-40 border-2 border-transparent`}
  grid-area: 5 / 2 / 6 / 4;
`;

const Thing = styled.section`
  ${tw`hover:border-yellow-300 z-40 border-2 border-transparent`}
  grid-area: 5 / 4 / 6 / 5;
`;

const Right = styled.aside`
  grid-area: 1 / 5 / 7 / 6;
`;

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="I AM" />
      <Wrapper>
        <MainPageContainer>
          <Left />
          <Logo>
            <Link to="logo">
              <ImageTile {...IMAGES[0]} />
            </Link>
          </Logo>
          <Dezign>
            <Link to="design">
              <ImageTile {...IMAGES[1]} />
            </Link>
          </Dezign>
          <Right />
          <Brand>
            <Link to="brand">
              <ImageTile {...IMAGES[2]} />
            </Link>
          </Brand>
          <Bauhaus>
            <ImageTile {...IMAGES[3]} />
          </Bauhaus>
          <Thing>
            <Link to="thing">
              <ImageTile {...IMAGES[4]} />
            </Link>
          </Thing>
          <Footer />
        </MainPageContainer>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
