import closeSvg from "assets/close.svg";
import { myContext } from "context";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const MainMenu = (): JSX.Element => {
  const PageWrapper = tw.div`absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white`;
  const MenuWrapper = styled.div`
    ${tw`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900`};
    transition: opacity 0.25s ease;
    max-width: 100%;
    max-height: 100vh;
    opacity: 0.95;
  `;
  // TODO: add leading
  const MenuItem = styled.li`
    ${tw`hover:font-bold hover:text-yellow-500 hover:underline text-5xl text-center text-white`};
    letter-spacing: 0.15rem;
  `;
  const Img = styled.img`
    ${tw`hover:opacity-100 opacity-75 cursor-pointer`}
    width: 2rem;
    height: 2rem;
    text-align: center;
  `;
  const CloseWrapper = styled.div`
    ${tw`cursor-pointer`}
    z-index: 800;
  `;
  // TODO: disable scroll
  // TODO: generate menu programmatically
  // TODO close menu after selection
  return (
    <myContext.Consumer>
      {(context) =>
        context.menuVisible?.isVisible ? (
          <PageWrapper
            onKeyPress={(event) => {
              console.log(event.code);
              if (event.code === "Escape") context.closeMenu;
            }}
          >
            <CloseWrapper onClick={context.closeMenu}>
              <Img src={closeSvg} alt="close button" />
            </CloseWrapper>
            <MenuWrapper>
              <nav id="menu" role="fullscreen-menu">
                <div className="inner">
                  <ul className="links pointer-events-auto">
                    <MenuItem>
                      <Link onClick={context.handleSelect} to="/">
                        Index
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link onClick={context.handleSelect} to="/brand">
                        Brand
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link onClick={context.handleSelect} to="/poster">
                        Poster
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link onClick={context.handleSelect} to="/thing">
                        Thing
                      </Link>
                    </MenuItem>

                    <MenuItem>
                      <Link onClick={context.handleSelect} to="/logo">
                        Logo
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link onClick={context.handleSelect} to="/smm">
                        SMM
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link onClick={context.handleSelect} to="/pro">
                        Pro
                      </Link>
                    </MenuItem>
                  </ul>
                </div>
              </nav>
            </MenuWrapper>
          </PageWrapper>
        ) : (
          ""
        )
      }
    </myContext.Consumer>
  );
};

export default MainMenu;
