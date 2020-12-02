import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import { myContext } from "context";
import React from "react";

import styled from "@emotion/styled";

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

export const MenuTile = (): JSX.Element => {
  return (
    <myContext.Consumer>
      {(context) => (
        <Menu onClick={context.showMenu}>
          <ImageTile {...STATIC_TILES.find((e) => e.alt === "menu")} />
        </Menu>
      )}
    </myContext.Consumer>
  );
};
