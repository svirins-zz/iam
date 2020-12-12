import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

export const Element = styled.div`
  ${tw`grid gap-0`}
  grid-template-columns: minmax(0.5rem, auto) auto minmax(0.5rem, auto);
  grid-template-rows: repeat(4, auto);
`;
export const Grid = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => {
  return <Element>{children}</Element>;
};
