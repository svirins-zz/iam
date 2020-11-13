import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Container = styled.article`
  ${tw`p-8 bg-gray-900`};
  grid-area: 5 / 2 / 6 / 5;
`;
const Title = tw.h2`font-sans text-3xl text-gray-100`;
const Paragraph = tw.p`font-sans text-base text-gray-100 py-4`;

const Description = (title: string, description: string): JSX.Element => {
  return (
    <Container>
      <Title>Brand</Title>
      <Paragraph>
        {" "}
        А name, term, design, symbol or any other feature that identifies one
        seller's good or service as distinct from those of other sellers. Brands
        are used in business, marketing, and advertising for recognition and,
        importantly, to create and store value as brand equity for the object
        identified, to the benefit of the brand's customers, its owners and
        shareholders. Name brands are sometimes distinguished from generic or
        store brands.
      </Paragraph>
      <Paragraph>
        In the modern era, the concept of branding has expanded to include
        deployment by a manager of the marketing and communication techniques
        and tools that help to distinguish a company or products from
        competitors, aiming to create a lasting impression in the minds of
        customers.
      </Paragraph>
    </Container>
  );
};

export default Description;
