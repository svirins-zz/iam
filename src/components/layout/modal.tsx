import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Modal = (): JSX.Element => {
  const OuterWrapper = styled.div`
    ${tw`fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-100 pointer-events-auto`};
    transition: opacity 0.25s ease;
  `;
  const MediumWrapper = tw.div`absolute w-full h-full bg-gray-900 opacity-50`;
  const InnerWrapper = tw.div`bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto`;
  const CloseIconWrapper = tw.div`cursor-pointer z-50`;
  const ContentWrapper = tw.div`py-4 text-left px-6`;
  const TitleWrapper = tw.div`flex justify-between items-center pb-3`;
  const FooterWrapper = tw.div`flex justify-end pt-2`;
  const SVGclose = tw.svg`fill-current text-black`;
  const svgPath = (
    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
  );
  const TitleText = tw.p`text-2xl font-bold`;
  const SubmitButton = tw.button`px-4 bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded`;
  // TODO: add validation / check submission + do we need thank you message?
  return (
    <myContext.Consumer>
      {(context) =>
        context.modalVisible?.isVisible ? (
          <>
            <OuterWrapper>
              <MediumWrapper onClick={context.closeModal}></MediumWrapper>
              <InnerWrapper>
                <ContentWrapper>
                  <TitleWrapper>
                    <TitleText>Contact us:</TitleText>
                    <CloseIconWrapper onClick={context.closeModal}>
                      <SVGclose
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="white"
                        viewBox="0 0 18 18"
                      >
                        {svgPath}
                      </SVGclose>
                    </CloseIconWrapper>
                  </TitleWrapper>

                  <form method="POST" name="iam-contact" data-netlify="true">
                    <input type="hidden" name="form-name" value="iam-contact" />
                    <label className="block mt-2">
                      <span className="text-gray-700">Name</span>
                      <input
                        className="form-input block w-full mt-1"
                        placeholder="your name here"
                      />
                    </label>
                    <label className="block mt-2">
                      <span className="text-gray-700">Phone number</span>
                      <input
                        className="form-input block w-full mt-1"
                        placeholder="+123-45-67-89"
                      />
                    </label>
                    <label className="block mt-2">
                      <span className="text-gray-700">Email</span>
                      <input
                        className="form-input block w-full mt-1"
                        placeholder="your@email.here"
                      />
                    </label>
                    <label className="block mt-2 mb-2">
                      <span className="text-gray-700">Message</span>
                      <input
                        className="form-input block w-full mt-1"
                        placeholder="express yourself"
                      />
                    </label>
                  </form>
                  <FooterWrapper>
                    <SubmitButton type="submit" onClick={context.closeModal}>
                      Submit
                    </SubmitButton>
                  </FooterWrapper>
                </ContentWrapper>
              </InnerWrapper>
            </OuterWrapper>
          </>
        ) : (
          ""
        )
      }
    </myContext.Consumer>
  );
};

export default Modal;
