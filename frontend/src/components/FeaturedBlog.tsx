import * as React from "react";
import styled from "styled-components";

import * as img from "./../../images/1d4633a2034e71e3992efe6776fcce91-1.png";
import { chkColors } from "./../commons/color";

export interface IProps {
  Title: string;
  Date: string;
  Article: string;
  Author: string;
}
export const FeaturedBlog = (props: IProps) => (
  <BlogPartsWrapper>
    <Picture src={img} />
    <Sentence>
      <NewsTitle>{props.Title}</NewsTitle>
      <Article>
        {props.Article}
        <NameDates>
          {props.Date}
          <Icon src={img} />
          {props.Author}
        </NameDates>
      </Article>
    </Sentence>
  </BlogPartsWrapper>
);

const BlogPartsWrapper = styled.div`
  margin: 20px 0px;
  overflow: hidden;
  display: block;
`;

const Picture = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 10px;
  border: solid thin ${chkColors.orange};
  float: left;
`;

const Sentence = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  float: left;
`;

const NewsTitle = styled.h3`
  padding: 0px;
  margin: 0px 0px 10px 0px;
  font-size: 1.3em;
  color: ${chkColors.white};
`;

const Article = styled.p`
  padding: 0px 30px 0px 0px;
  margin: 0px;
  color: ${chkColors.white};
  word-break: break-all;
  position: absolute;
`;

const NameDates = styled.p`
  padding: 5px 0px 0px 0px;
  margin: 0px;
  color: ${chkColors.white};
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: solid thin ${chkColors.orange};
  display: box;
  vertical-align: -4px;
  margin: 0px 10px 0px 10px;
`;
