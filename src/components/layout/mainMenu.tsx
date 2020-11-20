import { myContext } from "context";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const MainMenu = (): JSX.Element => {
  const CloseIconWrapper = tw.div`cursor-pointer z-50`;
  const SVGclose = tw.svg`fill-current text-black`;

  const MenuWrapper = styled.div`
    ${tw`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 pointer-events-auto`};
    transition: opacity 0.25s ease;
    max-width: 100%;
    max-height: 100vh;
    opacity: 0.95;
  `;
  const MenuItem = styled.li`
    ${tw`hover:text-6xl hover:text-yellow-500 hover:tracking-widest hover:underline text-6xl text-center text-white`};
    letter-spacing: 0.15rem;
  `;
  const svgPath = (
    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
  );
  return (
    <myContext.Consumer>
      {(context) =>
        context.menuVisible?.isVisible ? (
          <MenuWrapper>
            <CloseIconWrapper onClick={context.closeMenu}>
              <SVGclose
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                {svgPath}
              </SVGclose>
            </CloseIconWrapper>

            <nav id="menu" role="fullscreen-menu">
              <div className="inner">
                <ul className="links">
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
        ) : (
          ""
        )
      }
    </myContext.Consumer>
  );
};

export default MainMenu;
