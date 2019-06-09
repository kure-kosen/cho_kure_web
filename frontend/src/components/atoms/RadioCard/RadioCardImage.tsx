import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

export default (props: Pick<IRadio, "image">) => {
  const { image } = props;

  return (
    <Wrapper>
      <Image src={image} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  width: calc(100% + 6px);
  margin-top: -3px;
  margin-left: -3px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top: 3px solid ${color.SKY_BLUE};
  border-left: 3px solid ${color.SKY_BLUE};
  border-right: 3px solid ${color.SKY_BLUE};
  border-bottom: 3px solid ${color.SKY_BLUE};
`;
