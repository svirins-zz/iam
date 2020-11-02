import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import bgr from "assets/backgrounds/plus.svg";

const Element = styled.main`
  ${tw`flex items-center min-h-screen bg-blue-900`}
  background-image: url(${bgr});
`;

const Wrapper = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => {
  return <Element>{children}</Element>;
};

export default Wrapper;
