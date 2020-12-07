import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import React from "react";

import styled from "@emotion/styled";

const HeaderRight = styled.header`
  border: 0.75rem solid transparent;
  border-image-slice: 1;
  border-width: 0.75rem;
  grid-area: 1 / 3 / 2 / 5;
`;

export const DesignTile = (): JSX.Element => {
  return (
    <HeaderRight>
      <ImageTile {...STATIC_TILES.find((e) => e.alt === "design")} />;
    </HeaderRight>
  );
};
