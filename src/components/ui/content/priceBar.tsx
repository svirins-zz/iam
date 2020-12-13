import { FormModal } from "components/ui/form";
import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Title = styled.h2`
  ${tw`flex-auto font-sans text-2xl font-semibold text-yellow-100 capitalize`}
  color: #fcf8c9;
`;
const Price = styled.p`
  ${tw`flex-auto px-4 font-sans font-semibold text-right text-yellow-100`}
  color:  #fcf8c9;
`;
const Spantop = tw.span`text-base`;
const SpanBottom = tw.span`text-base font-semibold`;
const Button = styled.button`
  ${tw` flex-1 px-4 py-2 font-bold rounded`}
  color: #101010;
  background-color: #d1c414;
  &:hover {
    background-color: #fff23d;
  }
`;

const Bar = styled.section`
  ${tw` flex items-center px-8 py-6 m-2`};
  grid-area: 1 / 1 / 2 / 2;
  background-color: #101010;
`;

export const PriceBar = ({
  title,
  price,
}: {
  title: string;
  price: number;
}): JSX.Element => {
  return (
    <myContext.Consumer>
      {(context) => (
        <Bar>
          <Title>{title}</Title>
          <Price>
            <Spantop>from</Spantop>
            <br />
            <SpanBottom>{price} USD</SpanBottom>
          </Price>
          <Button onClick={context.showModal}>Order</Button>
          <FormModal />
        </Bar>
      )}
    </myContext.Consumer>
  );
};
