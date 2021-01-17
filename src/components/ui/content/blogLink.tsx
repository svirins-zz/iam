import { ImageTile } from "components/ui/tiles";
import { STATIC_TILES } from "const";
import React from "react";

import styled from "@emotion/styled";

const Blog = styled.section`
  border: 0.5rem solid transparent;
  border-image-slice: 1;
  border-width: 0.5rem;
  &:hover {
    border-image-source: linear-gradient(
      45deg,
      rgba(255, 0, 82, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(62, 169, 218, 1) 100%
    );
  }
  grid-area: 3 / 1 / 4 / 2;
`;

export const BlogLink = (): JSX.Element => {
  // TODO: add ${tag} to link below, when medium blog is ready
  const urlWithTag = `https://medium.com/@romamore/`;
  return (
    <Blog>
      <a href={urlWithTag} target="blank">
        <ImageTile {...STATIC_TILES.find((e) => e.alt === "blog_slim")} />
      </a>
    </Blog>
  );
};
