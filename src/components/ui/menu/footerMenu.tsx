import { myContext } from "context";
import { Link } from "gatsby";
import { generateMenu } from "lib";
import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const MenuWrapper = tw.nav`flex flex-row justify-between w-full`;
const MenuItem = styled.span`
  ${tw`xl:text-xl lg:text-xl md:text-base sm:text-xs text-xs text-center cursor-pointer`}
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);  
  background-image: linear-gradient(to right, #f0f0f0, #8c8b8b, #f0f0f0);
  background-position: 50% 100%;
  background-size: 0% 4px;
  background-repeat: no-repeat;
  transition: all 0.5s linear;
  &:hover {
    background-size: 100% 4px;
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
