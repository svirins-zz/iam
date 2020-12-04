import { FormModal } from "components/layout";
import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Title = styled.h2`
  ${tw`flex-auto font-sans text-3xl capitalize`}
  color: #fcf8c9;
`;
const Price = styled.p`
  ${tw`flex-auto px-4 font-sans text-base text-right`}
  color:  #fcf8c9;
`;
const Spantop = tw.span`text-base`;
const SpanBottom = tw.span`text-xl font-semibold`;
const Button = styled.button`
  ${tw` flex-1 px-4 py-2 font-bold rounded`}
  color: #101010;
  background-color: #d1c414;
  &:hover {
    background-color: #fff23d;
  }
`;

const Bar = styled.section`
  ${tw`flex items-center p-8`};
  grid-area: 5 / 2 / 6 / 5;
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
