import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

export const Element = styled.div`
  ${tw`grid gap-1`}
  grid-template-columns: 
    minmax(5rem, 0.5fr)
    repeat(3, minmax(10rem, 1fr))
    minmax(5rem, 0.5fr);
  grid-template-rows:
    repeat(4, minmax(10rem, auto))
    auto auto auto;
`;

export const MainPageContainer = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => {
  return <Element>{children}</Element>;
};
