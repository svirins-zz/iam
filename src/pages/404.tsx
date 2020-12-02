import { PageLayout, SEO } from "components/layout";
import React from "react";
import tw from "twin.macro";

const Wrapper = tw.div`
  flex items-center justify-center
`;

const Main = tw.div`
  bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`;

const Text = tw.p`
  text-xl text-gray-700
`;

const Custom404 = (): JSX.Element => {
  return (
    <PageLayout>
      <Wrapper>
        <SEO title="Page Not Found" />
        <Main>
          <Heading>Oops!</Heading>
          <Text>We can`&lsquo;`t find the page that you are looking for.</Text>
        </Main>
      </Wrapper>
    </PageLayout>
  );
};

export default Custom404;
