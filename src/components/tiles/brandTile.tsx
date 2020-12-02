import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import { Link } from "gatsby";
import React from "react";

import styled from "@emotion/styled";

const Brand = styled.section`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  &:hover {
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  }
  grid-area: 2 / 2 / 5 / 5;
`;

export const BrandTile = (): JSX.Element => {
  return (
    <Brand>
      <Link to="brand">
        <ImageTile {...STATIC_TILES.find((e) => e.alt === "brand")} />
      </Link>
    </Brand>
  );
};
