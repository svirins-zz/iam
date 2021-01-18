import { myContext } from "context";
import { Link } from "gatsby";
import { generateMenu } from "lib";
import React, { useContext } from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const MenuWrapper = tw.nav`flex flex-row justify-between w-full`;
const MenuItem = styled.span`
  ${tw`xl:text-2xl lg:text-xl md:text-base sm:text-xs text-xs text-center cursor-pointer`}
  background-image: linear-gradient(90deg, #ED1B55 0%, #28286F 30%, #45C7F0 100%);
  background-position: 50% 100%;
  background-size: 0% 4px;
  background-repeat: no-repeat;
  transition: all 0.25s linear;
  padding-bottom: 0.5rem;
  &:hover {
    background-size: 100% 6px;
  }
`;

export const FooterMenu = (): JSX.Element => {
  const context = useContext(myContext);
  const menuItems = generateMenu();
  const displayMenu = menuItems.map((menuItem, index) => {
    return menuItem.isAtFooter ? (
      <MenuItem key={index}>
        <Link
          onClick={context.handleSelect}
          to={menuItem.link}
          key={index}
          activeClassName={"text-white"}
        >
          {menuItem.name}
        </Link>
      </MenuItem>
    ) : null;
  });
  return (
    <MenuWrapper id="footer_menu" role="navigation">
      {displayMenu}
    </MenuWrapper>
  );
};
