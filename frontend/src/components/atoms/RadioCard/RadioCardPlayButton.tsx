import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import useAudio from "@/utils/hooks/useAudio";
import PlayButtonProgress from "@/components/atoms/RadioCard/RadioCardPlayButtonProgress";

export default (props: Pick<IRadio, "mp3" | "duration">) => {
  const { mp3, duration } = props;
  const { isPlay, play, pause, jump, times } = useAudio({
    url: mp3.url!,
    duration
  });
  const [currentTime, setCurrentTime] = React.useState(0);
  const seekBarRef = React.useRef<HTMLDivElement>(null);

  const hoge = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const mouse = e.pageX;
    const element = seekBarRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const position = rect.left + window.pageXOffset;
    const offset = mouse - position;
    const width = rect.right - rect.left;
  }, []);

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
        {/* <p onClick={() => jump(2)}>jump</p> */}
      </PlayButtonProgressWrapper>
      <SeekBar ref={seekBarRef} onClick={hoge} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: ${220 - 32 / 2}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
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

const SeekBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(#ccc, #ccc) no-repeat #eee;
`;
