import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

import Modal from "../layout/modal";

const Title = tw.h2`font-sans text-3xl text-gray-100 flex-auto`;
const Price = tw.p`font-sans text-base text-gray-100 flex-auto text-right px-4`;
const Spantop = tw.span`text-base`;
const SpanBottom = tw.span`text-xl font-semibold`;
const Button = tw.button`bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded flex-1`;
const Bar = styled.section`
  ${tw`flex items-center p-8 bg-gray-900`};
  grid-area: 4 / 2 / 5 / 5;
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
