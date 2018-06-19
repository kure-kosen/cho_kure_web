import * as React from "react";
import styled from "styled-components";

export const AboutText = () => (
  <AboutTextStyle>
    <AboutTitleTextStyle>about</AboutTitleTextStyle>
    <AboutParagraphTextStyle>
      インキュベーションワークが始まった 2015 年頃から、呉高専の学生は縦のつながり
      と横のつながりが広がっていきました。しかし、まだ多くの学生は同じクラス、部
      活動の友だちなどのコミュニティで完結してしまっています。私たちはこれまで多
      様な人とつながったことで、将来の選択肢が増えていきました。後輩たちにも同じ
      ようにもっとたくさんの人とつながりを作って、多くの経験をしてほしいという想 いから、この活動を開始しました。
    </AboutParagraphTextStyle>
  </AboutTextStyle>
);

const AboutTextStyle = styled.div`
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
  width: 90vw;
  height: auto;
`;

const AboutTitleTextStyle = styled.h3`
  color: #f6b600;
  text-align: center;
`;

const AboutParagraphTextStyle = styled.p`
  color: white;
`;
