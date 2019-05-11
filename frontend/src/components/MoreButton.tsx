import * as React from "react";
import styled from "styled-components";

import ChkButtonBase from "./../commons/ChkButtonBase";

interface IProps {
  to: string;
}

const MoreButton = (props: IProps) => {
  const { to } = props;

  return (
    <MoreButtonWrapper>
      <ChkButtonBase text="more" to={to} />
    </MoreButtonWrapper>
  );
};

const MoreButtonWrapper = styled.div`
  margin: 0 auto;
  width: 150px;
`;

export default MoreButton;
