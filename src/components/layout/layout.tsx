import { MainMenu } from "components/ui/menu";
import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

import styled from "@emotion/styled";

const GlobalWrapper = styled.div`
  ${tw`w-screen min-h-screen`}
  background-color: #101010;
`;

export const Layout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <MainMenu />
      <GlobalWrapper>{children}</GlobalWrapper>
    </>
  );
};
