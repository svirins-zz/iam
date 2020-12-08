import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import { myContext } from "context";
import React from "react";

import styled from "@emotion/styled";

const Menu = styled.header`
  cursor: pointer;
  border: 0.75rem solid transparent;
  border-image-slice: 1;
  border-width: 0.75rem;
  &:hover {
    border-image-source: linear-gradient(
      45deg,
      rgba(255, 0, 82, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(62, 169, 218, 1) 100%,
    );
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
