import tw from "twin.macro";
import React from "react";

import SEO from "components/seo";
import Layout from "components/layout";
const images = [
  {
    name: "logo",
    src: require("assets/images/logo.webp"),
  },
  {
    name: "dezign",
    src: require("assets/images/dezign.webp"),
  },
  {
    name: "brand",
    src: require("assets/images/brand.webp"),
  },
  {
    name: "bauhaus",
    src: require("assets/images/bauhaus.webp"),
  },
  {
    name: "thing",
    src: require("assets/images/thing.webp"),
  },
  {
    name: "brand",
    src: require("assets/images/brand.webp"),
  },
];

const TWImage = tw.img`object-contain w-full`;

const Container = tw.div`grid gap-1 grid-cols-5 grid-rows-6 transition-all duration-100`;
// transition-all duration-100

const Logo = tw.header`row-span-1 col-span-1 items-center`;

const Dezign = tw.header`row-span-1 col-span-2 items-center`;

const Brand = tw.section`row-span-3 col-span-3 items-center`;

const Bauhaus = tw.section`row-span-1 col-span-2 items-center`;

const Thing = tw.section`row-span-1 col-span-1 items-center`;

const Footer = tw.footer`col-span-3 items-center`;

const FooterText = tw.section`prose items-center`;

// const Left = tw.aside`col-start-auto row-span-3`;

// const Right = tw.aside`col-end-auto row-span-3`;
const Left = tw.aside`row-span-6 col-start-auto`;

const Right = tw.aside`row-span-6 col-end-auto`;

const Index = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="I AM" />
      <Container>
        <Left />
        <Logo>
          <TWImage src={images[0].src} />
          {/* <picture>
            <source
              srcSet={images[0].src}
              //sizes="100vw"
              type="image/webp"
            />
          </picture> */}
        </Logo>
        <Dezign>
          <TWImage src={images[1].src} />
          {/* <picture>
            <source
              srcSet={images[1].src}
              //sizes="100vw"
              type="image/webp"
            />
          </picture> */}
        </Dezign>
        <Right />
        <Brand>
          <TWImage src={images[2].src} />
          {/* <picture>
            <source
              srcSet={images[2].src}
              //sizes="100vw"
              type="image/webp"
            />
          </picture> */}
        </Brand>
        <Bauhaus>
          <TWImage src={images[3].src} />
          {/* <picture>
            <source
              srcSet={images[3].src}
              //sizes="100vw"
              type="image/webp"
            />
          </picture> */}
        </Bauhaus>
        <Thing>
          <TWImage src={images[4].src} />
          {/* <picture>
            <source
              srcSet={images[4].src}
              //sizes="100vw"
              type="image/webp"
            />
          </picture> */}
        </Thing>
        <Footer>
          <FooterText>This is footer</FooterText>
        </Footer>
      </Container>
    </Layout>
  );
};

export default Index;
