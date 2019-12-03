import React, { FC } from "react";
import styled from "styled-components";

import ChkButtonBase from "@/components/atoms/Buttons/ChkButtonBase";

export const MoreButtonText: FC = () => {
  return (
    <MoreButtonWrapper>
      <ChkButtonBase text="more" />
    </MoreButtonWrapper>
  );
};

const MoreButtonWrapper = styled.div`
  margin: 0 auto;
  width: 150px;
`;
