import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";
import { ImageProps } from "@types";

const Element = styled.img`
  ${tw`hover:border-yellow-300 z-40 object-fill border-2 border-transparent`}
  height: 100%;
  width: 100%;
`;

const ImageTile = ({ alt, url }: ImageProps): JSX.Element => {
  return <Element src={url} alt={alt} />;
};

export default ImageTile;
