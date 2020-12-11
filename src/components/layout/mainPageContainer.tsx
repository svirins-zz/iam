import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

export const Element = styled.div`
  ${tw`grid min-w-full gap-0`}
  grid-template-columns: 
     minmax(0.5rem, auto)
     repeat(3, 1fr)
     minmax(0.5rem, auto)
`;

// export const Element = styled.div`
//   ${tw`grid min-w-full gap-0 mt-2`}
//   grid-template-columns: 
//     minmax(0rem, 1.5fr)
//     repeat(3, 1fr)
//     minmax(0rem, 1.5fr);
//   grid-template-rows: 1fr repeat(3, 1fr) 1fr 0 0.75fr;
// `;

export const MainPageContainer = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => {
  return <Element>{children}</Element>;
};
