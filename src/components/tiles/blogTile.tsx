import { ImageTile } from "components/tiles";
import { STATIC_TILES } from "const";
import React from "react";

import styled from "@emotion/styled";

const Blog = styled.section`
  border: 0.75rem solid transparent;
  border-image-slice: 1;
  border-width: 0.75rem;
  &:hover {
    border-image-source: linear-gradient(45deg, rgba(255,0,82,1) 0%, rgba(9,9,121,1) 35%, rgba(62,169,218,1) 100%);
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
