import React from "react";
import styled from "styled-components";

import { color, heading } from "@/constants/styles";
import ChkButtonBase from "@/components/atoms/Buttons/ChkButtonBase";
import TagButton from "@/components/atoms/RadioSearcher/TagButton";
import RadioSearchInput from "@/components/atoms/RadioSearcher/RadioSearchInput";

export default () => (
  <Wrapper>
    <RadioSearcherTitle>Search</RadioSearcherTitle>
    <form action="">
      <RadioSearchInput name="who" placeholder="誰が" />
      <RadioSearchInput name="when" placeholder="いつ" />
      <RadioSearchInput name="what" placeholder="どんなこと" />
      <RadioSearchTagButtonWrapper>
        <TagButton name="tag1" text="tag1" />
        <TagButton name="tag2" text="tag2" />
        <TagButton name="tag3" text="tag3" />
      </RadioSearchTagButtonWrapper>
      <RadioSearchTagButtonWrapper>
        <TagButton name="tag4" text="tag4" />
        <TagButton name="tag5" text="tag5" />
        <TagButton name="tag6" text="tag6" />
      </RadioSearchTagButtonWrapper>
      <RadioSearchButtonWrapper>
        <RadioSearchButton text="Search" />
      </RadioSearchButtonWrapper>
    </form>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  color: ${color.WHITE};
  padding: 0 20px;
  background-color: #fff;
`;

const RadioSearcherTitle = styled.div`
  ${heading}
  color: ${color.BLUE};
`;

const RadioSearchTagButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const RadioSearchButtonWrapper = styled.div`
  margin-top: 20px;
  margin: 0 auto;
  width: 50%;
`;

const RadioSearchButton = styled(ChkButtonBase)``;
