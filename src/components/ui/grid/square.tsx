import { ImageTile } from "components/ui/tiles";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";
import { useLocation } from "@reach/router";
import { ImageProps } from "@types";

const WithLinkWrapper = styled.main`
  ${tw``}
  border: 0.5rem solid transparent;
  border-image-slice: 1;
  border-width: 0.5rem;
  &:hover {
    border-image-source: linear-gradient(
      45deg,
      rgba(255, 0, 82, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(62, 169, 218, 1) 100%
    );
  }
  grid-area: 2 / 2 / 3 / 3;
`;

const WithoutLinkWrapper = styled.main`
  ${tw``}
  border: 0.5rem solid transparent;
  border-image-slice: 1;
  border-width: 0.5rem;
  grid-area: 2 / 2 / 3 / 3;
`;

export const Square = ({ alt, url }: ImageProps | {}): JSX.Element => {
  const { pathname } = useLocation();
  let displayedElement = null;
  displayedElement =
    pathname === "/" ? (
      <WithLinkWrapper>
        <Link to="brand">
          <ImageTile {...{ alt: alt, url: url }} />
        </Link>
      </WithLinkWrapper>
    ) : (
      <WithoutLinkWrapper>
        <ImageTile {...{ alt: alt, url: url }} />
      </WithoutLinkWrapper>
    );

  return displayedElement;
};
