import React, { FC } from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { StyledBorderContaineImage } from "../ContainImage";

export const RadioImage: FC<Pick<IRadio, "image">> = ({ image }) => {
  return (
    <Wrapper>
      <Image src={image} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 190px;
`;

const Image = styled(StyledBorderContaineImage)`
  && {
    width: calc(100% + 6px);
    margin-top: -3px;
    margin-left: -3px;
  }
`;
