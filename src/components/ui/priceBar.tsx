import React from "react";
import tw from "twin.macro";

const Title = tw.h2`font-sans text-3xl text-gray-100`;
const Price = tw.p`font-sans text-base text-gray-100`;
const Button = tw.button`bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded`;
const Bar = tw.section`p-16 bg-gray-900`;

const clickHandler = () => console.log("peep");

const PriceBar = (title: string, price: number): JSX.Element => {
  return (
    <Bar>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Button onClick={clickHandler} />
    </Bar>
  );
};

export default PriceBar;
