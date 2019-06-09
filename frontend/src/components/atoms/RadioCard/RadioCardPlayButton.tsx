import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

export default (props: Pick<IRadio, "mp3" | "play_time">) => {
  const { mp3, play_time } = props;

  const isPlay = !false;

  return (
    <Wrapper>
      <ButtonWrapper>
        {isPlay ? (
          <PlayButton className="fas fa-play" />
        ) : (
          <PauseButton className="fas fa-pause" />
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: ${220 - 32 / 2}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 32px;
  height: 32px;
  background-color: ${color.ORANGE};
  border: 3px solid ${color.VIVID_ORANGE};
  border-radius: 50%;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: -2px;
`;

const ButtonBase = styled.i`
  line-height: 32px;
  font-size: 0.7rem;
  color: ${color.WHITE};
`;

const PlayButton = styled(ButtonBase)`
  padding-left: 2.5px;
`;

const PauseButton = styled(ButtonBase)``;
