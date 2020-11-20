import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const LeftSpan = tw.span`font-sans text-sm`;
const RightSpan = tw.span`text-right font-sans text-sm`;
const MenuWrapper = styled.nav`
  ${tw`flex-grow text-right`};
`;

const Element = styled.footer`
  ${tw`flex p-8 bg-gray-500 border-4 border-transparent`}
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

const Link = styled.a`
  ${tw`hover:text-yellow-500 hover:underline pl-4 text-sm text-center cursor-pointer`};
`;

const Footer = (): JSX.Element => {
  return (
    <Element>
      <section>
        <myContext.Consumer>
          {(context) => (
            <MenuWrapper role="full_horizontal_menu">
              <Link onClick={context.handleSelect} to="/">
                Index
              </Link>
              <Link onClick={context.handleSelect} to="/brand">
                Brand
              </Link>
              <Link onClick={context.handleSelect} to="/poster">
                Poster
              </Link>
              <Link onClick={context.handleSelect} to="/thing">
                Thing
              </Link>
              <Link onClick={context.handleSelect} to="/logo">
                Logo
              </Link>
              <Link onClick={context.handleSelect} to="/smm">
                SMM
              </Link>
              <Link onClick={context.handleSelect} to="/pro">
                Pro
              </Link>


            </MenuWrapper>
          )}
        </myContext.Consumer>
      </section>
      <section>
        <LeftSpan>&copy;&nbsp;Copyright 2020 IAM.</LeftSpan>
        <RightSpan>
          {" "}
          Made with{" "}
          <span role="img" aria-labelledby="love">
            ❤️
          </span>{" "}
          by <Svirins href="https://twitter.com/svirins">@svirins</Svirins>
        </RightSpan>
      </section>
    </Element>
  );
};

export default Footer;
