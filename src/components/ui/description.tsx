import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Container = styled.article`
  ${tw`p-16 bg-gray-900`};
  grid-area: 5 / 2 / 6 / 5;
`;
const Title = tw.h2`font-sans text-3xl text-gray-100`;
const Paragraph = tw.p`font-sans text-base text-gray-100`;

const Description = (title: string, description: string): JSX.Element => {
  return (
    <Container>
      <Title>432</Title>
      <Paragraph>324</Paragraph>
    </Container>
  );
};

export default Description;
