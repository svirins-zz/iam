import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Element = styled.div`
  ${tw`grid gap-2 py-4`}
  /* grid-template-columns: minmax(200px, auto) 1fr 1fr 1fr minmax(200px, auto); */
  grid-template-columns: auto 1fr 1fr 1fr auto;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr minmax(1fr, auto);
`;

const InnerPageContainer = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => {
  return <Element>{children}</Element>;
};

export default InnerPageContainer;
