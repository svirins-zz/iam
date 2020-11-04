import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Title = tw.h2`font-sans text-3xl text-gray-100`;
const Price = tw.p`font-sans text-base text-gray-100`;
const Button = tw.button`bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded`;
const Bar = styled.section`
  ${tw`p-4 bg-gray-900`};
  grid-area: 4 / 2 / 5 / 5;
`;
const clickHandler = () => console.log("peep");

const PriceBar = (title: string, price: number): JSX.Element => {
  return (
    <Bar>
      <Title>333</Title>
      <Price>122</Price>
      <Button onClick={clickHandler}>ClickMe</Button>
    </Bar>
  );
};

export default PriceBar;
