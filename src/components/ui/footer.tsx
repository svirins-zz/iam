import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const li = "t is a long established fact that a reader will be distracted by t";
const Paragraph = tw.p`font-sans text-base text-gray-100`;
const Element = styled.footer`
  ${tw`p-4 bg-gray-500 border-2 border-transparent`}
  grid-area: 6 / 2 / 7 / 5
`;

const Footer = (): JSX.Element => {
  return (
    <Element>
      <Paragraph>{li}</Paragraph>
    </Element>
  );
};

export default Footer;
