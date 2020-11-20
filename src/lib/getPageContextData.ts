import { CONTENT } from "const";

import { useLocation } from "@reach/router";
import { ContentProps } from "@types";

export const getPageContextData = (): ContentProps => {
  const { pathname } = useLocation();
  const pageContext = CONTENT.find((e) => pathname.includes(e.alt)) ?? {
    alt: "",
    url: "",
    price: 0,
    title: "",
    content: "",
  };
  return { ...pageContext };
};
