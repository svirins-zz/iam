import React from "react";
import tw from "twin.macro";
import { ImageProps } from "@types";

const Element = tw.img`hover:outline-none hover:shadow-outline hover:border-white object-cover`;

const ImageTile = ({ alt, url }: ImageProps): JSX.Element => {
  return <Element src={url} alt={alt} />;
};

export default ImageTile;
