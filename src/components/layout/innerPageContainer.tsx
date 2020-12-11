import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Element = styled.div`
  ${tw`grid min-w-full gap-0`}
  grid-template-columns: 
    minmax(0rem, 1.5fr)
    repeat(3, minmax(10rem, 1fr))
    minmax(0rem, 1.5fr);
  grid-template-rows:
    repeat(4, minmax(10rem, auto))
    auto auto 0.75fr 0.75fr;
`;

export const InnerPageContainer = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => {
  return <Element>{children}</Element>;
};
