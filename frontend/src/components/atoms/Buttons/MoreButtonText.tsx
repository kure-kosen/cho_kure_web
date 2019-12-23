import React, { FC } from "react";
import styled from "styled-components";

import ChkButtonBase from "@/components/atoms/Buttons/ChkButtonBase";

interface Props {
  onClick?: (e: any) => void;
}

export const MoreButtonText: FC<Props> = ({ onClick }) => {
  return (
    <MoreButtonWrapper onClick={onClick}>
      <ChkButtonBase text="more" />
    </MoreButtonWrapper>
  );
};

const MoreButtonWrapper = styled.div`
  margin: 0 auto;
  width: 150px;
`;
