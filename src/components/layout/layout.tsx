import React from "react";
import { GlobalStyles } from "twin.macro";
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
