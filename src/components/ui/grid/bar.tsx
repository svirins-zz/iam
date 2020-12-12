import { ImageTile } from "components/ui/tiles";
import { STATIC_TILES } from "const";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Container = styled.section`
  grid-area: 3 / 2 / 4 / 3;
`;
const SubGrid = styled.section`
  ${tw`grid gap-0`}
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

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
  grid-area: 1 / 1 / 2 / 3;
`;

const Thing = styled.section`
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
  grid-area: 1 / 3 / 2 / 4;
`;

export const Bar = (): JSX.Element => {
  return (
    <Container>
      <SubGrid>
        <Blog>
          <a href="https://medium.com/@romamore">
            <ImageTile {...STATIC_TILES.find((e) => e.alt === "blog")} />
          </a>
        </Blog>

        <Thing>
          <Link to="thing">
            <ImageTile {...STATIC_TILES.find((e) => e.alt === "thing")} />;
          </Link>
        </Thing>
      </SubGrid>
    </Container>
  );
};
