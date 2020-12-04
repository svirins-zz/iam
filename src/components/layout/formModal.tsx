/* eslint-disable prettier/prettier */
import { myContext } from "context";
import React, { useContext } from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

export const FormModal = (): JSX.Element => {
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
  const TitleText = tw.p`text-2xl`;
  const SubmitButton = styled.button`
    ${tw` w-full px-4 py-2 mt-4 font-bold rounded`}
    color: #101010;
    background-color: #d1c414;
    &:hover {
      background-color: #fff23d;
    }
  `;
  const Input = tw.input`mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black`;
  const Textarea = tw.textarea`mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black`;
  const Label = tw.label`block`;
  const Span = tw.span`text-gray-700`;
  const FormWrapper = tw.div`grid grid-cols-1 gap-6`;
  const context = useContext(myContext);

  // TODO: add validation / check submission + do we need thank you message?
  return context.modalVisible?.isVisible ? (
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
            <FormWrapper>
              <Label>
                <Span>Name</Span>
                <Input placeholder="your name here" type="text" />
              </Label>
              <Label>
                <Span>Phone number</Span>
                <Input placeholder="+123-45-67-89" type="tel" />
              </Label>
              <Label>
                <Span>Email</Span>
                <Input placeholder="your@email.here" type="email" />
              </Label>
              <Label>
                <Span>Message</Span>
                <Textarea
                  placeholder="express yourself"
                  rows="2"
                  spellcheck="false"
                />
              </Label>
            </FormWrapper>
          </form>
          <FooterWrapper>
            <SubmitButton type="submit" onClick={context.closeModal}>
              Submit
            </SubmitButton>
          </FooterWrapper>
        </ContentWrapper>
      </InnerWrapper>
    </OuterWrapper>
    ) : (
      <p></p>
    )

};
