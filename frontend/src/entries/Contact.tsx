import * as React from "react";
import styled from "styled-components";

import { media } from "./../commons/style";

import * as img from "./../../images/hero.jpg";

export const Contact = () => (
  <div>
    <HeroArea>
      <HeroContent>
        Contact
        <HeroContentBar />
        ご意見ご感想お待ちしております
      </HeroContent>
    </HeroArea>
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
            <ContactFormInput name="department" type="text" placeholder="所属" />
            <ContactFormInput name="grade" type="text" placeholder="学年" />
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

const HeroArea = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(-45deg, rgba(211, 237, 251, 0.2), rgba(243, 225, 100, 0.2)), url(${img});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  width: 60%;
  font-size: 2rem;
  text-align: center;
  color: white;

  @media ${media.mobile} {
    width: 90%;
  }
`;

const HeroContentBar = styled.hr`
  display: box;
  width: 50%;
  height: 2px;
  background-color: #f6ad3c;
  border: 0;
`;

const ContactFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactFormTitle = styled.div`
  margin: 2rem;
  margin-top: 4rem;
  font-size: 1.5rem;
  text-align: center;
  color: #00afec;
`;

const ContactForm = styled.div`
  width: 50%;

  @media ${media.mobile} {
    width: 90%;
  }
`;

const ContactFormInputWrapper = styled.div`
  margin: 20px;
`;

const ContactFormInput = styled.input`
  margin: 5px;
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

const ContactFormButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #edb600;
  border-style: none;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.1);
`;
