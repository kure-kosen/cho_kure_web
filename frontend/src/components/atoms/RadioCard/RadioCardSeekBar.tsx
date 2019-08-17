import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";
import { IRadio } from "@/api/RadioApi";
import { IUseAudio } from "@/utils/hooks/useAudio";

interface IProps extends Pick<IRadio, "duration">, Pick<IUseAudio, "jump"> {
  currentTime: number;
}

export default (props: IProps) => {
  const { currentTime, duration, jump } = props;

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(currentTime);
  }, [currentTime]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const data = Number(e.target.value);
      jump(data);
      setValue(data);
    },
    []
  );

  return (
    <Wrapper>
      <SeekBar
        type="range"
        value={value}
        min={0}
        max={duration}
        onChange={handleChange}
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

const SeekBar = styled.input`
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
    width: 13px;
    height: 13px;
    display: block;
    background-color: ${color.ORANGE};
    border-radius: 50%;
  }
`;
