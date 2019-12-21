import React, { FC } from "react";
import styled from "styled-components";
import { device } from "@/constants/styles";
import { ContactForm } from "@/components/molecules/Contact/Form";
import { ContactHeroArea } from "@/components/molecules/Contact/ContactHeroArea";

export const Contact: FC = () => {
  return (
    <div>
      <ContactHeroArea />
      <ContactFormWrapper>
        <div>
          <ContactFormTitle>お問い合わせフォーム</ContactFormTitle>
          <ContactForm />
        </div>
      </ContactFormWrapper>
    </div>
  );
};

const ContactFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 50%;
    margin-bottom: 100px;

    @media ${device.mobile} {
      width: 90%;
    }
  }
`;

const ContactFormTitle = styled.div`
  margin: 2rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: #00afec;
`;
