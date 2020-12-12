import { markdownRenderer } from "components/templates";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Container = styled.article`
  ${tw`px-8 py-6 m-2`};
  grid-area: 2 / 1 / 3 / 2;
  background-color: #292827;
`;
const Title = styled.h2`
  ${tw`font-sans text-3xl font-semibold text-yellow-100`}
  color:  #f4e2bd;
`;
const Content = styled.div`
  ${tw`font-sans`}
  color: #9c9c9b;
`;
export const Description = ({
  title,
  markdown,
}: {
  title: string;
  markdown: string;
}): JSX.Element => (
  <Container>
    <Title>{title}</Title>
    <Content>{markdownRenderer(markdown)}</Content>
  </Container>
);
