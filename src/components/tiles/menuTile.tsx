import { ImageTile } from "components/ui";
import { STATIC_TILES } from "const";
import { myContext } from "context";
import React from "react";
export const MenuTile = (): JSX.Element => {
  return (
    <myContext.Consumer>
      {(context) => (
        <section onClick={context.showMenu}>
          <ImageTile {...STATIC_TILES.find((e) => e.alt === "menu")} />
        </section>
      )}
    </myContext.Consumer>
  );
};
