import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Container = styled.article`
  ${tw`p-8 m-1`};
  grid-area: 6 / 2 / 7 / 5;
  background-color: #292827;
`;
const Title = styled.h2`
  ${tw`font-sans text-3xl`}
  color:  #f4e2bd;
`;
const Content = styled.div`
  ${tw`py-4 font-sans text-base`}
  color: #9c9c9b;
`;
// TODO: ADD Styling for innerHTML
export const Description = ({
  title,
  html,
}: {
  title: string;
  html: string;
}): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};
