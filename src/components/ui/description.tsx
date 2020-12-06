import React from "react";
import parse from "remark-parse";
import remark2react from "remark-react";
import tw from "twin.macro";
import unified from "unified";

import styled from "@emotion/styled";

const H1Title = tw.h1``;
const H2Title = tw.h2`text-4xl`;
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

const Container = styled.article`
  ${tw`p-8 m-1`};
  grid-area: 6 / 2 / 7 / 5;
  background-color: #292827;
`;
const Title = styled.h2`
  ${tw`font-sans text-3xl`}
  color:  #f4e2bd;
`;
const Content = styled.div`
  ${tw`py-4 font-sans text-base`}
  color: #9c9c9b;
`;

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

export const Description = ({
  title,
  html,
}: {
  title: string;
  html: string;
}): JSX.Element => {
  const renderedMarkdown = unified()
    .use(parse)
    .use(remark2react, options)
    .processSync(html).result;

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{renderedMarkdown}</Content>
    </Container>
  );
};
