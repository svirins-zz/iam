import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

import styled from "@emotion/styled";

import Menu from "./menu";

const GlobalWrapper = styled.div`
  ${tw`flex items-center min-h-screen`}
  background-color: #101010;
`;

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
