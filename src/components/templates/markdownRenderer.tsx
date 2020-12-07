import externalLinks from "remark-external-links";
import parse from "remark-parse";
import remark2react from "remark-react";
import tw from "twin.macro";
import unified from "unified";

// TODO: add styling to markdowbm

const H1Title = tw.h1``;
const H2Title = tw.h2`text-6xl`;
const H3Title = tw.h3``;
const Paragraph = tw.p``;
const Link = tw.a``;
const Ul = tw.ul``;
const Li = tw.li``;
const Img = tw.img``;
const Em = tw.em``;
const Strong = tw.strong``;
const Hr = tw.hr``;
const Bq = tw.blockquote``;
const options = {
  remarkReactComponents: {
    h1: H1Title,
    h2: H2Title,
    h3: H3Title,
    p: Paragraph,
    a: Link,
    ul: Ul,
    li: Li,
    img: Img,
    em: Em,
    strong: Strong,
    hr: Hr,
    blockquote: Bq,
  },
};

export const markdownRenderer = (markdown: string): JSX.Element => {
  const rendered: JSX.Element = unified()
    .use(externalLinks, { target: false, rel: ["nofollow"] })
    .use(parse)
    .use(remark2react, options)
    .processSync(markdown).result;
  return rendered;
};
