import { FooterMenu } from "components/ui/menu";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Element = styled.footer`
  ${tw`p-4 mx-2 mt-2 mb-4 bg-gray-500`}
  grid-area: 4 / 2 / 5 / 3;
  background-color: #292827;
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
    <Element>
      <FooterMenu />
      <Section>
        <Span>
          {" "}
          Made with{" "}
          <span role="img" aria-labelledby="love">
            💜
          </span>{" "}
          by <Svirins href="https://twitter.com/svirins">@svirins</Svirins>
        </Span>
      </Section>
    </Element>
  );
};
