import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

export const Modal = (): JSX.Element => {
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
  const TitleText = tw.p`text-3xl`;
  const SubmitButton = styled.button`
    ${tw` w-full px-4 py-2 mt-4 font-bold rounded`}
    color: #101010;
    background-color: #d1c414;
    &:hover {
      background-color: #fff23d;
    }
  `;
  tw.button`px-4 bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 mt-4 rounded w-full`;
  // TODO: add validation / check submission + do we need thank you message?
  // TODO: make submit button full-width
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
                    <label className="block">
                      <span className="text-gray-900">Name</span>
                      <input
                        className="form-input focus:border-yellow-300 border-grey-300 bg-gray-50 hover:bg-gray-100 block w-full mt-1 border-2 border-opacity-50"
                        placeholder="your name here"
                      />
                    </label>
                    <label className="block mt-2">
                      <span className="text-gray-900">Phone number</span>
                      <input
                        className="form-input focus:border-yellow-300 border-grey-300 bg-gray-50 hover:bg-gray-100 block w-full mt-1 border-2 border-opacity-50"
                        placeholder="+123-45-67-89"
                      />
                    </label>
                    <label className="block mt-2">
                      <span className="text-gray-900">Email</span>
                      <input
                        className="form-input focus:border-yellow-300 border-grey-300 bg-gray-50 hover:bg-gray-100 block w-full mt-1 border-2 border-opacity-50"
                        placeholder="your@email.here"
                      />
                    </label>
                    <label className="block mt-2 mb-2">
                      <span className="text-gray-900">Message</span>
                      <input
                        className="form-input focus:border-yellow-300 border-grey-300 bg-gray-50 hover:bg-gray-100 block w-full mt-1 border-2 border-opacity-50"
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


