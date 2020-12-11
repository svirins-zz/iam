import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import React from "react";

import styled from "@emotion/styled";

const HeaderRight = styled.header`
  border: 0.5rem solid transparent;
  grid-area: 1 / 3 / 2 / 5;
`;

export const DesignTile = (): JSX.Element => {
  return (
    <HeaderRight>
      <ImageTile {...STATIC_TILES.find((e) => e.alt === "design")} />;
    </HeaderRight>
  );
};
