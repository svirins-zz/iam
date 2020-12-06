import remark from "remark";
import remarkHTML from "remark-html";

export const toHTML = (textField) =>
  remark().use(remarkHTML).processSync(textField).toString();
