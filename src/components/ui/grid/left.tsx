import React from "react";

import styled from "@emotion/styled";

const Container = styled.aside`
  grid-area: 1 / 1 / 5 / 2;
`;

export const Left = (): JSX.Element => {
  return <Container />;
};
