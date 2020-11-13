import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const LeftSpan = tw.span`text-left flex-auto font-sans text-sm`;
const RightSpan = tw.span`text-right flex-auto text-right font-sans text-sm`;

const Element = styled.footer`
  ${tw`flex items-center p-8 bg-gray-500 border-2 border-transparent`}
  grid-area: 6 / 2 / 7 / 5
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
        by <a href="https://twitter.com/svirins">@svirins</a>
      </RightSpan>
    </Element>
  );
};

export default Footer;
