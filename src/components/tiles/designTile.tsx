import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import React from "react";

import styled from "@emotion/styled";

const HeaderRight = styled.header`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  grid-area: 1 / 3 / 2 / 5;
`;

export const DesignTile = (): JSX.Element => {
  return (
    <HeaderRight>
      <ImageTile {...STATIC_TILES.find((e) => e.alt === "design")} />;
    </HeaderRight>
  );
};
