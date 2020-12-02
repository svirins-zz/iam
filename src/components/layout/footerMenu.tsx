import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const MenuWrapper = styled.nav`
  ${tw` col-span-2 text-right`};
`;
const Link = styled.a`
  ${tw`hover:text-yellow-500 hover:underline pl-4 text-sm text-center cursor-pointer`};
`;

export const FooterMenu = (): JSX.Element => {
  return (
    <>
      <myContext.Consumer>
        {(context) => (
          <MenuWrapper role="full_horizontal_menu">
            <Link onClick={context.handleSelect} to="/">
              Index
            </Link>
            <Link onClick={context.handleSelect} to="/brand">
              Brand
            </Link>
            <Link onClick={context.handleSelect} to="/idea">
              Idea
            </Link>
            <Link onClick={context.handleSelect} to="/logo">
              Logo
            </Link>
            <Link onClick={context.handleSelect} to="/poster">
              Poster
            </Link>
            <Link onClick={context.handleSelect} to="/pro">
              Pro
            </Link>
            <Link onClick={context.handleSelect} to="/smm">
              SMM
            </Link>
            <Link onClick={context.handleSelect} to="/thing">
              Thing
            </Link>
            <Link href="https://medium.com/@romamore" target="blank">
              My blog
            </Link>
          </MenuWrapper>
        )}
      </myContext.Consumer>
    </>
  );
};
