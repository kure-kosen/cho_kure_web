import * as React from "react";
import styled from "styled-components";

import * as feature from "../../images/radio-history-feature.jpg";

export const RadioHistoryFeature = () => (
  <Wrapper>
    <Frame>
      <Box>
        <TitleWrapper>
          <RadioHistoryTitleFixed>Department of</RadioHistoryTitleFixed>
          <RadioHistoryTitleDepartment>
            Architecture
          </RadioHistoryTitleDepartment>
          <RadioHistoryTitleDepartmentJa>
            建築学科特集
          </RadioHistoryTitleDepartmentJa>
        </TitleWrapper>
      </Box>
    </Frame>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${feature});
  background-size: cover;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Frame = styled.div`
  width: 70%;
  height: 450px;
  margin: auto;
  padding: 40px;
  border: 5px solid rgb(255, 255, 255);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border: 5px solid rgb(255, 255, 255);
  border-radius: 5px;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  font-weight: bold;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const RadioHistoryTitleFixed = styled.div`
  color: rgb(241, 129, 1);
  font-size: 2.5rem;
  margin-bottom: 35px;
`;

const RadioHistoryTitleDepartment = styled.div`
  color: rgb(241, 129, 1);
  font-size: 4rem;
  margin-bottom: 62px;
`;

const RadioHistoryTitleDepartmentJa = styled.div`
  font-size: 3rem;
`;
