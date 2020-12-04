import { myContext } from "context";
import { Link } from "gatsby";
import { generateMenu } from "lib";
import React, { useContext } from "react";
import tw from "twin.macro";

const MenuWrapper = tw.nav`col-span-2 text-right`;
const MenuItem = tw.span`hover:text-yellow-500 hover:underline pl-4 text-sm text-center cursor-pointer`;

export const FooterMenu = (): JSX.Element => {
  const context = useContext(myContext);
  const menuItems = generateMenu();
  const displayMenu = menuItems.map((menuItem, index) => {
    return (
      <MenuItem key={index}>
        <Link
          onClick={context.handleSelect}
          to={menuItem.link}
          key={index}
          activeClassName={"text-blue-300"}
        >
          {menuItem.name}
        </Link>
      </MenuItem>
    );
  });
  return (
    <MenuWrapper id="footer_menu" role="full_horizontal_menu">
      {displayMenu}
    </MenuWrapper>
  );
};
