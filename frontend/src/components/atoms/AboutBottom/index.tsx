import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "@/constants/styles";
import { OrangeButton } from "@/components/atoms/Buttons/Button";

import img from "./bg.jpg";

export default () => (
  <AboutBottomStyle>
    <MaskStyle>
      <ContentStyle>
        <TitleStyle>about</TitleStyle>
        <ParagraphStyle>
          インキュベーションワークが始まった2015年頃から、呉高専の学生は縦のつながりと横のつながりが広がっていきました。しかし、まだ多くの学生は同じクラス、部活動の友だちなどのコミュニティで完結してしまっています。私たちはこれまで多様な人とつながったことで、将来の選択肢が増えていきました。後輩たちにも同じようにもっとたくさんの人とつながりを作って、多くの経験をしてほしいという想いから、この活動を開始しました。
        </ParagraphStyle>
        <ButtonWrapper>
          <OrangeButton
            as={Link}
            to="/contact"
            maxWidth={200}
            style={{ margin: "0 auto" }}
          >
            contact
          </OrangeButton>
        </ButtonWrapper>
      </ContentStyle>
    </MaskStyle>
  </AboutBottomStyle>
);

const AboutBottomStyle = styled.div`
  position: relative;
  width: auto;
  height: 70vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
`;

const MaskStyle = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentStyle = styled.div`
  box-sizing: border-box;
  width: 50vw;
  height: auto;

  @media ${device.mobile} {
    width: 90vw;
  }
`;

const TitleStyle = styled.h2`
  color: ${({ theme }) => theme.color.orange};
  text-align: center;
`;

const ParagraphStyle = styled.p`
  color: ${({ theme }) => theme.color.white};
  line-height: 1.42em;
`;

const ButtonWrapper = styled.div`
  margin: 80px auto 0;
  width: 40%;
`;
