import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { chkColors } from "./../commons/color";

import * as img from "./../../images/apple-2385198_1280-1.jpg";
import * as chanyou from "./../../images/chanyou.jpg";

export interface IProps {
  title: string;
  date: string;
  summary: string;
  author: string;
  to: string;
}
export const FeaturedBlog = (props: IProps) => {
  const { title, date, summary, author, to } = props;

  return (
    <Link to={to}>
      <Wrapper>
        <PictureWrapper>
          <Picture src={img} />
        </PictureWrapper>
        <Article>
          <Title>{title}</Title>
          <Contents>
            <p>{summary}</p>
            <Meta>
              <span>{date}</span>
              <Icon src={chanyou} />
              <span>{author}</span>
            </Meta>
          </Contents>
        </Article>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
`;

const PictureWrapper = styled.div`
  width: 230px;
`;

const Picture = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: solid 1px ${chkColors.orange};
`;

const Article = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 1.3rem;
  color: ${chkColors.white};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: left;

  color: ${chkColors.white};
  word-break: break-all;
`;

const Meta = styled.div`
  color: ${chkColors.darkenAqua};
  font-weight: bold;
`;

const Icon = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: solid 1px ${chkColors.orange};
  object-fit: cover;
  margin: 0 10px;
  vertical-align: middle;
`;
