import { STATIC_TILES } from "const";

import { ImageProps } from "@types";

export const getPageHeaderData = (): {
  menuProps: ImageProps;
  designProps: ImageProps;
} => {
  const menuProps = STATIC_TILES.find((e) => e.alt === "menu") ?? {
    alt: "",
    url: "",
  };
  const designProps = STATIC_TILES.find((e) => e.alt === "dezign") ?? {
    alt: "",
    url: "",
  };
  return { menuProps, designProps };
};
