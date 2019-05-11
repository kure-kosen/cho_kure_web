import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { media } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

import * as img from "./../../images/bg.jpg";

export const AboutBottom = () => (
  <AboutBottomStyle>
    <MaskStyle>
      <ContentStyle>
        <TitleStyle>about</TitleStyle>
        <ParagraphStyle>
          インキュベーションワークが始まった2015年頃から、呉高専の学生は縦のつながりと横のつながりが広がっていきました。しかし、まだ多くの学生は同じクラス、部活動の友だちなどのコミュニティで完結してしまっています。私たちはこれまで多様な人とつながったことで、将来の選択肢が増えていきました。後輩たちにも同じようにもっとたくさんの人とつながりを作って、多くの経験をしてほしいという想いから、この活動を開始しました。
        </ParagraphStyle>
        <ToContact to="/contact">
          <ButtonStyle>contact</ButtonStyle>
        </ToContact>
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

  @media ${media.mobile} {
    width: 90vw;
  }
`;

const TitleStyle = styled.h2`
  color: ${chkColors.orange};
  text-align: center;
`;

const ParagraphStyle = styled.p`
  color: ${chkColors.white};
  line-height: 1.42em;
`;

const ButtonStyle = styled(ChkButtonBase)`
  margin: 80px auto 0;
  width: 40%;
`;

const ToContact = styled(Link)`
  text-decoration: "none";
`;
