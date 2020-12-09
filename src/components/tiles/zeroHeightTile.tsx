import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import React from "react";

import styled from "@emotion/styled";

const Zero = styled.section`
  border: 0rem solid transparent;
  border-image-slice: 1;
  border-width: 0rem;
  grid-area: 7 / 2 / 8 / 5;
  display: none;
`;

export const ZeroHeightTile = (): JSX.Element => {
  return (
    <Zero>
      <ImageTile {...STATIC_TILES.find((e) => e.alt === "zero")} />
    </Zero>
  );
};
