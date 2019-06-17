import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import useAudio from "@/utils/hooks/useAudio";
import PlayButtonProgress from "@/components/atoms/RadioCard/RadioCardPlayButtonProgress";
import SeekBar from "@/components/atoms/RadioCard/RadioCardSeekBar";

export default (props: Pick<IRadio, "mp3" | "duration">) => {
  const { mp3, duration } = props;
  const { isPlay, play, pause, jump, times } = useAudio({
    url: mp3.url!,
    duration
  });

  return (
    <Wrapper>
      <PlayButtonProgressWrapper>
        <ButtonWrapper>
          {!isPlay ? (
            <PlayButton className="fas fa-play" onClick={play} />
          ) : (
            <PauseButton className="fas fa-pause" onClick={pause} />
          )}
        </ButtonWrapper>
        <PlayButtonProgress
          progress={(() => {
            const percent =
              Math.round((times.currentTime / times.duration) * 1000) / 10;
            return isNaN(percent) ? 0 : percent;
          })()}
          currentTime={times.currentTime}
        />
      </PlayButtonProgressWrapper>
      <SeekBar
        currentTime={times.currentTime}
        duration={times.duration}
        jump={jump}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 38px;
  display: flex;
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
