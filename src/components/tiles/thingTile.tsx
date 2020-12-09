import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import { Link } from "gatsby";
import React from "react";

import styled from "@emotion/styled";

const Thing = styled.section`
  border: 0.5rem solid transparent;
  border-image-slice: 1;
  border-width: 0.5rem;
  &:hover {
    border-image-source: linear-gradient(45deg, rgba(255,0,82,1) 0%, rgba(9,9,121,1) 35%, rgba(62,169,218,1) 100%);
  }
  grid-area: 5 / 4 / 6 / 5;
`;

export const ThingTile = (): JSX.Element => {
  return (
    <Thing>
      <Link to="thing">
        <ImageTile {...STATIC_TILES.find((e) => e.alt === "thing")} />
      </Link>
    </Thing>
  );
};
