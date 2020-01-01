import React from "react";
import styled from "styled-components";

import { heading } from "@/constants/styles";

import { TagButton } from "@/components/atoms/RadioSearcher/TagButton";
import RadioSearchInput from "@/components/atoms/RadioSearcher/RadioSearchInput";
import { BlueButton } from "@/components/atoms/Buttons/Button";

export default () => (
  <Wrapper>
    <RadioSearcherTitle>Search</RadioSearcherTitle>
    <form action="">
      <RadioSearchInput name="who" placeholder="誰が" />
      <RadioSearchInput name="when" placeholder="いつ" />
      <RadioSearchInput name="what" placeholder="どんなこと" />
      <RadioSearchTagButtonWrapper>
        <TagButton name="tag1" />
        <TagButton name="tag2" />
        <TagButton name="tag3" />
      </RadioSearchTagButtonWrapper>
      <RadioSearchTagButtonWrapper>
        <TagButton name="tag4" />
        <TagButton name="tag5" />
        <TagButton name="tag6" />
      </RadioSearchTagButtonWrapper>

      <BlueButton
        style={{ margin: "0 auto", marginTop: "20px" }}
        maxWidth={200}
      >
        Search
      </BlueButton>
    </form>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  color: ${({ theme }) => theme.color.white};
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.white};
`;

const RadioSearcherTitle = styled.div`
  ${heading}
  color: ${({ theme }) => theme.color.blue};
`;

const RadioSearchTagButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
