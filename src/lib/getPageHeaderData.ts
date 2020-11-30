import { CONTENT } from "const";

import { ImageProps } from "@types";

export const getPageHeaderData = (): {
  menuProps: ImageProps;
  designProps: ImageProps;
} => {
  const menuProps = CONTENT.find((e) => e.alt === "menu") ?? {
    alt: "",
    url: "",
  };
  const designProps = CONTENT.find((e) => e.alt === "dezign") ?? {
    alt: "",
    url: "",
  };
  return { menuProps, designProps };
};

