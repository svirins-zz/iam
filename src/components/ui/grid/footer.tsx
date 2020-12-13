import { FooterMenu } from "components/ui/menu";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Container = styled.footer`
  ${tw`px-8 py-6 mx-2 my-4 mt-2 bg-gray-500`}
  grid-area: 4 / 2 / 5 / 3;
  background-color: #000000;
  color: #9c9c9b;
`;
const Svirins = tw.a`text-purple-500 hover:underline hover:text-pink-300`;
const Section = tw.div`mt-4`;
const Span = styled.p`
  ${tw`font-sans text-center`}
  font-size: 0.75rem;
  color: #6d6d6b;
`;

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <FooterMenu />
      <Section>
        <Span>
          {" "}
          Made with{" "}
          <span role="img" aria-labelledby="mixed">
            💜
          </span>{" "}
          by <Svirins href="https://twitter.com/svirins">@svirins</Svirins>
        </Span>
      </Section>
    </Container>
  );
};
