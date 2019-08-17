import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import useAudio from "@/utils/hooks/useAudio";
import PlayButtonProgress from "@/components/atoms/RadioCard/RadioCardPlayButtonProgress";
import SeekBar from "@/components/atoms/RadioCard/RadioCardSeekBar";

const paddingTime = (time: number, maxLength: number) =>
  `${String(time).padStart(maxLength, "0")}`;

// TODO: テストを書く
const parsePlayTime = (time: number) => {
  const seconds = Math.floor(time);
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds % 3600) / 60);
  const ss = seconds % 60;

  if (hh) {
    return `${paddingTime(hh, 2)}:${paddingTime(mm, 2)}:${paddingTime(ss, 2)}`;
  }
  if (hh === 0 && mm) return `${paddingTime(mm, 1)}:${paddingTime(ss, 2)}`;
  if (hh === 0 && mm === 0 && ss) {
    return `${paddingTime(mm, 1)}:${paddingTime(ss, 2)}`;
  }

  return `${paddingTime(mm, 2)}:${paddingTime(ss, 2)}`;
};

// TODO: テストを書く
const calcProgress = (times: {
  currentTime: number;
  duration: number;
}): number => {
  if (times.duration === 0) return 0;
  const percent = Math.round((times.currentTime / times.duration) * 1000) / 10;
  return percent;
};

export default (props: Pick<IRadio, "mp3" | "duration" | "play_time">) => {
  const { mp3, duration, play_time } = props;
  const { isPlay, play, pause, jump, times } = useAudio({
    url: mp3.url!,
    duration
  });

  return (
    <Wrapper>
      <Controller>
        <PlayButtonProgressWrapper>
          <ButtonWrapper>
            {!isPlay ? (
              times.currentTime === times.duration ? (
                <RePlayButton className="fas fa-redo-alt" onClick={play} />
              ) : (
                <PlayButton className="fas fa-play" onClick={play} />
              )
            ) : (
              <PauseButton className="fas fa-pause" onClick={pause} />
            )}
          </ButtonWrapper>
          <PlayButtonProgress
            progress={calcProgress(times)}
            currentTime={times.currentTime}
          />
        </PlayButtonProgressWrapper>
        <SeekBar
          currentTime={times.currentTime}
          duration={times.duration}
          jump={jump}
        />
      </Controller>
      <PlayTimes>
        {parsePlayTime(times.currentTime)} / {play_time}
      </PlayTimes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 auto;
  padding: 0 5px;
  width: 100%;
  height: calc(38px + 0.9rem);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Controller = styled(Row)`
  height: 38px;
`;

const PlayTimes = styled(Row)`
  margin-top: -10px;
  height: 0.9rem;
  width: 100%;
  font-size: 0.9rem;
  line-height: 0.9rem;
  text-align: right;
  justify-content: flex-end;
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

const RePlayButton = styled(ButtonBase)`
  font-size: 0.8rem;
  padding-top: 1px;
`;

const PlayButtonProgressWrapper = styled.div``;
