import React from "react";
import tw from "twin.macro";

const Container = tw.article`p-16 bg-gray-900`;
const Title = tw.h2`font-sans text-3xl text-gray-100`;
const Paragraph = tw.p`font-sans text-base text-gray-100`;

const Description = (title: string, description: string): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Container>
  );
};

export default Description;
