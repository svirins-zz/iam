import { ImageTile } from "components/ui/tiles";
import Img from "gatsby-image";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Element = styled.img`
  ${tw`z-40 object-cover w-full h-full`}
`;

const WithoutLinkWrapper = styled.main`
  ${tw``}
  border: 0.5rem solid transparent;
  border-image-slice: 1;
  border-width: 0.5rem;
  grid-area: 2 / 2 / 3 / 3;
`;

export const Square = ({ image }): JSX.Element => {
  console.log(image);
  return (
    <WithoutLinkWrapper>
      {/* <ImageTile {...{ alt: alt, url: url }} /> */}
      <Img fluid={image} />
    </WithoutLinkWrapper>
  );
};
