import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import useAudio from "@/utils/hooks/useAudio";
import PlayButtonProgress from "@/components/atoms/RadioCard/RadioCardPlayButtonProgress";

export default (props: Pick<IRadio, "mp3">) => {
  const { mp3 } = props;
  const { isPlay, play, pause, jump, times } = useAudio(mp3.url!);

  return (
    <Wrapper>
      <PlayButtonProgressWrapper>
        <ButtonWrapper>
          {isPlay ? (
            <PlayButton className="fas fa-play" onClick={play} />
          ) : (
            <PauseButton className="fas fa-pause" onClick={pause} />
          )}
        </ButtonWrapper>
        <PlayButtonProgress
          progress={(times.currentTime / times.duration) * 100}
        />
        {/* <p onClick={() => jump(2)}>jump</p> */}
      </PlayButtonProgressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: ${220 - 32 / 2}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 38px;
  height: 38px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  z-index: 10;
  position: relative;
`;

const ButtonBase = styled.i`
  line-height: 32px;
  font-size: 0.7rem;
  color: ${color.WHITE};
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
`;

const PlayButton = styled(ButtonBase)`
  padding-left: 2.5px;
`;

const PauseButton = styled(ButtonBase)``;

const PlayButtonProgressWrapper = styled.div``;
