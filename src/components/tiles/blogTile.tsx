import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import React from "react";

import styled from "@emotion/styled";

const Blog = styled.section`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  &:hover {
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  }
  grid-area: 5 / 2 / 6 / 4;
`;
export const BlogTile = (): JSX.Element => {
  return (
    <Blog>
      <a href="https://medium.com/@romamore" target="blank">
        <ImageTile {...STATIC_TILES.find((e) => e.alt === "blog")} />
      </a>
    </Blog>
  );
};
