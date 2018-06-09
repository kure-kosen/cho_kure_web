import * as React from "react";
import styled from "styled-components";

import { media } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

import { HeroArea } from "./../components/HeroArea";
import { ContactHeroContent } from "./../components/ContactHeroContent";

export const Contact = () => (
  <div>
    <HeroArea InnerComponent={<ContactHeroContent />} />
    <ContactFormWrapper>
      <ContactForm>
        <ContactFormTitle>お問い合わせフォーム</ContactFormTitle>
        <form action="">
          <ContactFormInputWrapper>
            <ContactFormInput name="name" type="text" placeholder="名前" />
          </ContactFormInputWrapper>
          <ContactFormInputWrapper>
            <ContactFormInput name="corner" type="text" placeholder="題名" />
          </ContactFormInputWrapper>
          <ContactFormInputWrapper>
            <ContactFormInputHalf name="department" type="text" placeholder="所属" />
            <ContactFormInputHalf name="grade" type="text" placeholder="学年" />
          </ContactFormInputWrapper>
          <ContactFormInputWrapper>
            <ContactFormInput name="email" type="text" placeholder="メールアドレス" />
          </ContactFormInputWrapper>
          <ContactFormInputWrapper>
            <ContactFormInput name="nickname" type="text" placeholder="ラジオネーム" />
          </ContactFormInputWrapper>
          <ContactFormInputWrapper>
            <ContactFormInput name="content" type="text" placeholder="内容" />
          </ContactFormInputWrapper>
          <ContactFormButton>送信</ContactFormButton>
        </form>
      </ContactForm>
    </ContactFormWrapper>
  </div>
);

const ContactFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactFormTitle = styled.div`
  margin: 2rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: #00afec;
`;

const ContactForm = styled.div`
  width: 50%;
  margin-bottom: 100px;

  @media ${media.mobile} {
    width: 90%;
  }
`;

const ContactFormInputWrapper = styled.div`
  margin: 20px;
`;

const ContactFormInput = styled.input`
  margin: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 5px;
  padding-left: 30px;
  line-height: 1.5rem;
  width: 100%;
  border: 2px solid #00afec;
  border-radius: 1.5rem;

  ::placeholder {
    color: #00afec;
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: #00afec;
  }
`;

const ContactFormInputHalf = ContactFormInput.extend`
  width: 50%;
`;

const ContactFormButton = ChkButtonBase.extend`
  background-color: ${chkColors.orange};
`;
