import { FooterMenu } from "components/layout";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Element = styled.footer`
  ${tw`p-8 mx-3 my-3 bg-gray-500 border-4 border-transparent`}
  grid-area: 8 / 2 / 9 / 5;
  background-color: #292827;
  color: #9c9c9b;
`;
const Svirins = styled.a`
  color: #f376d4;
  &:hover {
    color: #fa1ac2;
  }
`;
const Section = tw.section`mt-4 flex`;
const LeftSpan = styled.span`
  ${tw`font-sans`}
  font-size: 0.8rem;
  color: #e4e4d6;
`;
const RightSpan = styled.span`
  ${tw`flex-grow font-sans text-sm text-right`}
  font-size: 0.8rem;
  color: #e4e4d6;
`;

export const Footer = (): JSX.Element => {
  return (
    <Element>
      <FooterMenu />
      <Section>
        <LeftSpan>&copy;&nbsp;Copyright 2020 IAM.</LeftSpan>
        <RightSpan>
          {" "}
          Made with{" "}
          <span role="img" aria-labelledby="love">
            ❤️
          </span>{" "}
          by <Svirins href="https://twitter.com/svirins">@svirins</Svirins>
        </RightSpan>
      </Section>
    </Element>
  );
};
