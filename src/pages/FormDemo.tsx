import tw from "twin.macro";
import React from "react";
import SEO from "components/seo";
import Layout from "components/layout";
import Form from "components/form";

const Container = tw.div`container`;

const Index = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="I AM" />
      <Container>
        <Form />
      </Container>
    </Layout>
  );
};

export default Index;
