import { myContext } from "context";
import { Link } from "gatsby";
import { generateMenu } from "lib";
import React, { useContext } from "react";
import tw from "twin.macro";

const MenuWrapper = tw.nav`flex flex-row`;
const MenuItem = tw.span`mr-3 hover:text-white  hover:underline text-sm 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-center cursor-pointer`;

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
          activeClassName={"text-yellow-300"}
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
