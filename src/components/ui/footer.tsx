import { FooterMenu } from "components/layout";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Element = styled.footer`
  ${tw`p-8 bg-gray-500 border-4 border-transparent`}
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
const Section = styled.section`
  ${tw`grid`}
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const LeftSpan = styled.span`
  ${tw`col-span-1 font-sans text-sm`}
`;
const RightSpan = styled.span`
  ${tw`col-span-1 font-sans text-sm text-right`}
`;

export const Footer = (): JSX.Element => {
  return (
    <Element>
      <Section>
        <FooterMenu />
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
