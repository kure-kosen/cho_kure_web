import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  ChangeEvent
} from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";
import { IRadio } from "@/api/RadioApi";
import { UseAudio } from "@/utils/hooks/useAudio";

interface Props extends Pick<IRadio, "duration">, Pick<UseAudio, "jump"> {
  currentTime: number;
}

export const RadioCardSeekBar: FC<Props> = ({
  currentTime,
  duration,
  jump
}) => {
  const [value, setValue] = useState(0);
  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    setValue(currentTime);
  }, [currentTime]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const data = Number(e.target.value);
      jump(data);
      setValue(data);
    },
    [value]
  );
  const handleTouchStart = useCallback(() => {
    setIsMove(true);
  }, [isMove]);
  const handleTouchEnd = useCallback(() => {
    setIsMove(false);
  }, [isMove]);

  return (
    <Wrapper>
      <SeekBar
        type="range"
        value={value}
        min={0}
        max={duration}
        onChange={handleChange}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        isMove={isMove}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SeekBar = styled.input<{ isMove: boolean }>`
  width: 100%;
  height: 4px;
  border-radius: 6px;

  background-color: #eaeaea;

  &:focus,
  &:active {
    outline: none;
  }

  &::-webkit-slider-thumb,
  -moz-range-thumb {
    appearance: none;
    cursor: pointer;
    position: relative;
    width: 16px;
    height: 16px;
    display: block;
    background-color: ${({ isMove }) =>
      isMove ? color.VIVID_ORANGE : color.ORANGE};
    border-radius: 50%;
  }
`;
