import { ImageTile } from "components/ui";
import { IMAGES } from "const";
import { myContext } from "context";
import React from "react";

export const MenuTile = (): JSX.Element => {
  return (
    <myContext.Consumer>
      {(context) => (
        <section onClick={context.showMenu}>
          <ImageTile {...IMAGES.find((e) => e.alt === "menu")} />
        </section>
      )}
    </myContext.Consumer>
  );
};
