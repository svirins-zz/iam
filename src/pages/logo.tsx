import { PageLayout, SEO } from "components/layout";
import {
  Description,
  Footer,
  ImageTile,
  InnerPageContainer,
  PriceBar,
} from "components/ui";
import { myContext } from "context";
import { getPageContextData, getPageHeaderData } from "lib";
import React from "react";

import styled from "@emotion/styled";

const Left = styled.aside`
  grid-area: 1 / 1 / 7 / 2;
`;
const Menu = styled.header`
  cursor: pointer;
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  &:hover {
    border-image-source: linear-gradient(to left, #be1e2d, #320004);
  }
  grid-area: 1 / 2 / 2 / 3;
`;

const HeaderRight = styled.header`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  grid-area: 1 / 3 / 2 / 5;
`;

const BigSquare = styled.section`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  grid-area: 2 / 2 / 5 / 5;
`;

const Right = styled.aside`
  grid-area: 1 / 5 / 7 / 6;
`;
const Logo = (): JSX.Element => {
  const { alt, url, price, title, content } = getPageContextData();
  const { menuProps, designProps } = getPageHeaderData();
  return (
    <PageLayout>
      <SEO title="Design" />
      <InnerPageContainer>
        <Left />
        <myContext.Consumer>
          {(context) => (
            <Menu onClick={context.showMenu}>
              <ImageTile {...menuProps} />
            </Menu>
          )}
        </myContext.Consumer>
        <HeaderRight>
          <ImageTile {...designProps} />
        </HeaderRight>
        <BigSquare>
          <ImageTile alt={alt} url={url} />
        </BigSquare>
        <Right />
        <PriceBar title={alt} price={price} />
        <Description title={title} content={content} />
        <Footer />
      </InnerPageContainer>
    </PageLayout>
  );
};

export default Logo;
