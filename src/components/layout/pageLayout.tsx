import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

import Menu from "./menu";

const GlobalWrapper = tw.div`flex items-center min-h-screen bg-blue-900`;

const PageLayout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <GlobalWrapper>{children}</GlobalWrapper>
    </>
  );
};

export default PageLayout;
