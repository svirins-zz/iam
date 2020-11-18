import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

import Modal from "../layout/modal";

const Title = styled.h2`
  ${tw`flex-auto font-sans text-3xl`}
  color: #fcf8c9;
`;
const Price = styled.p`
  ${tw`flex-auto px-4 font-sans text-base text-right`}
  color:  #fcf8c9;
`;
const Spantop = tw.span`text-base`;
const SpanBottom = tw.span`text-xl font-semibold`;

const Button = styled.button`
  ${tw`flex-1 px-4 py-2 font-bold rounded`}
  color: #101010;
  background-color: #fdec0a;
  &:hover {
    background-color: #c4bb3e;
  }
`;

const Bar = styled.section`
  ${tw`flex items-center p-8`};
  grid-area: 4 / 2 / 5 / 5;
  background-color: #101010;
`;

const PriceBar = (title: string, price: number): JSX.Element => {
  return (
    <myContext.Consumer>
      {(context) => (
        <Bar>
          <Title>Brand</Title>
          <Price>
            <Spantop>from</Spantop>
            <br />
            <SpanBottom>200 USD</SpanBottom>
          </Price>
          <Button onClick={context.showModal}>Order</Button>
          <Modal />
        </Bar>
      )}
    </myContext.Consumer>
  );
};

export default PriceBar;
