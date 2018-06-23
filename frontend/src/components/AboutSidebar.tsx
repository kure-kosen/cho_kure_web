import * as React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";

export const AboutSidebar = () => (
  <AboutSidebarStyle>
    <Title>About</Title>
    <Description>
      ちょっくれとは、呉のちょっと気になるコミュニティやイベントについて発信していく、呉高専公認の学生団体であり、ラジオ番組です。たくさんの呉高専生に、自分のお気に入りのコミュニティを見つけてもらうことを目的に活動しています。ちなみにちょっくれは「ちょっときいて呉高専」の略です！
      みんなきいてね！ 2017年11月30日に第1回の配信を開始をしました。
    </Description>
  </AboutSidebarStyle>
);

const AboutSidebarStyle = styled.div`
  width: 100%;
  padding: 0 20px;
  height: 400px;
`;

const Title = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: left;
  color: #00afec;
  color: ${chkColors.blue};
`;

const Description = styled.div`
  color: ${chkColors.gray};
`;
