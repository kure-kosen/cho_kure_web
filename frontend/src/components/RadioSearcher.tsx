import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";
import ChkButtonBase from "../commons/ChkButtonBase";

export const RadioSearcher = () => (
  <Wrapper>
    <RadioSearcherTitle>Search</RadioSearcherTitle>
    <form action="">
      <RadioSearchInputWrapper>
        <RadioSearchInput name="who" type="text" placeholder="誰が" />
      </RadioSearchInputWrapper>
      <RadioSearchInputWrapper>
        <RadioSearchInput name="when" type="text" placeholder="いつ" />
      </RadioSearchInputWrapper>
      <RadioSearchInputWrapper>
        <RadioSearchInput name="what" type="text" placeholder="どんなこと" />
      </RadioSearchInputWrapper>
      <RadioSearchTagButtonWrapper>
        <RadioSearchTagButton name="tag1" text="tag1" color="blue" bgcolor="white" border="blue" />
        <RadioSearchTagButton name="tag2" text="tag2" color="blue" bgcolor="white" border="blue" />
        <RadioSearchTagButton name="tag3" text="tag3" color="blue" bgcolor="white" border="blue" />
      </RadioSearchTagButtonWrapper>
      <RadioSearchTagButtonWrapper>
        <RadioSearchTagButton name="tag4" text="tag4" color="blue" bgcolor="white" border="blue" />
        <RadioSearchTagButton name="tag5" text="tag5" color="blue" bgcolor="white" border="blue" />
        <RadioSearchTagButton name="tag6" text="tag6" color="blue" bgcolor="white" border="blue" />
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
  color: white;
  padding: 0 20px;
  background-color: #fff;
`;

const RadioSearcherTitle = styled.div`
  ${title}
  color: ${chkColors.blue};
`;

const RadioSearchInputWrapper = styled.div`
  margin-bottom: 10px;
`;

const RadioSearchInput = styled.input`
  padding: 5px;
  padding-left: 30px;
  line-height: 1.5rem;
  width: 100%;
  border: 2px solid ${chkColors.blue};
  border-radius: 1.5rem;
  outline: none;

  ::placeholder {
    color: ${chkColors.placeholder};
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: ${chkColors.placeholder};
  }
`;

const RadioSearchTagButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const RadioSearchTagButton = styled(ChkButtonBase)``;

const RadioSearchButtonWrapper = styled.div`
  margin-top: 20px;
  margin: 0 auto;
  width: 50%;
`;

const RadioSearchButton = styled(ChkButtonBase)``;
