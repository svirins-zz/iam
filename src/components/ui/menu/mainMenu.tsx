import closeSvg from "assets/close_yellow.svg";
import { myContext } from "context";
import { Link } from "gatsby";
import { generateMenu } from "lib";
import React, { useContext } from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

export const MainMenu = (): JSX.Element | null => {
  const PageWrapper = tw.div`absolute top-0 right-0 z-50  mt-4 mr-4 text-2xl min-h-screen w-screen	`;
  const MenuWrapper = styled.div`
    ${tw` fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-gray-900`};
    transition: opacity 0.25s ease;
    max-width: 100%;
    min-height: 600px;
    opacity: 0.98;
  `;
  const MenuItem = styled.li`
    ${tw`hover:font-semibold hover:text-white hover:underline hover:-translate-y-1 hover:scale-125 flex-grow text-5xl leading-snug tracking-wide text-center text-gray-400 transition duration-500 ease-in-out transform`};
  `;

  const Img = styled.img`
    ${tw`hover:opacity-100 opacity-90 absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer`}
    width: 2rem;
    height: 2rem;
    text-align: center;
  `;
  const CloseWrapper = styled.div`
    ${tw`cursor-pointer`}
    z-index: 800;
  `;
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
  return context.menuVisible?.isVisible ? (
    <PageWrapper
      onKeyPress={(event) => {
        if (event.code === "Escape") context.closeMenu;
      }}
    >
      <CloseWrapper onClick={context.closeMenu}>
        <Img src={closeSvg} alt="close button" />
      </CloseWrapper>
      <MenuWrapper>
        <nav id="menu" role="fullscreen-menu">
          <div className="inner">
            <ul className="links pointer-events-auto">{displayMenu}</ul>
          </div>
        </nav>
      </MenuWrapper>
    </PageWrapper>
  ) : null;
};
