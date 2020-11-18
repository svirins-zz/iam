import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const LeftSpan = tw.span`text-left flex-auto font-sans text-sm`;
const RightSpan = tw.span`text-right flex-auto text-right font-sans text-sm`;

const Element = styled.footer`
  ${tw`flex items-center p-8 bg-gray-500 border-4 border-transparent`}
  grid-area: 6 / 2 / 7 / 5;
  background-color: #292827;
  color: #9c9c9b;
`;
const Link = styled.a`
  color: #f376d4;
  &:hover {
    color: #fa1ac2;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Element>
      <LeftSpan>&copy;&nbsp;Copyright 2020 IAM.</LeftSpan>
      <RightSpan>
        {" "}
        Made with{" "}
        <span role="img" aria-labelledby="love">
          ❤️
        </span>{" "}
        by <Link href="https://twitter.com/svirins">@svirins</Link>
      </RightSpan>
    </Element>
  );
};

export default Footer;
