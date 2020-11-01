import tw from "twin.macro";
import React from "react";
import SEO from "components/seo";
import Layout from "components/layout";
import Form from "components/form";


const FormDemo = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="I AM" />
        <Form />
    </Layout>
  );
};

export default FormDemo;
