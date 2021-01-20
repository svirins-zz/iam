import { BlogLink, Description, PriceBar } from "components/ui/content";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Element = styled.main`
  ${tw``}
  grid-area: 3 / 2 / 4 / 3;
`;

const SubGrid = styled.section`
  ${tw`grid gap-0`}
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
`;

export const Content = ({ portableText, price, title }): JSX.Element => {
  return (
    <Element>
      <SubGrid>
        <PriceBar title={title} price={price} />
        <Description title={title} portableText={portableText} />
        <BlogLink />
      </SubGrid>
    </Element>
  );
};
