import React from "react";
import { GlobalStyles } from "twin.macro";
import "../styles/globals.css";
const Layout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
