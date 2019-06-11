import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

const calcParams = ({
  radius,
  strokeWidth
}: {
  radius: number;
  strokeWidth: number;
}) => {
  return {
    width: radius * 2 + strokeWidth,
    height: radius * 2 + strokeWidth,
    radius,
    strokeWidth,
    circumference: 2 * Math.PI * (radius - 2)
  };
};

interface IProps {
  progress?: number;
}

export default ({ progress = 100 }: IProps) => {
  const params = calcParams({ radius: 16, strokeWidth: 4 });

  return (
    <Wrapper width={params.width} height={params.height}>
      <Progress
        width={params.width}
        height={params.height}
        progress={progress}
        circumference={params.circumference}
        strokeWidth={params.strokeWidth}
      >
        <circle
          className="back"
          cx={params.width / 2}
          cy={params.height / 2}
          r={params.radius}
        />
        <circle
          className="white-bar"
          x={1}
          y={1}
          cx={params.width / 2}
          cy={params.height / 2}
          r={params.radius - 2.5}
        />
        <circle
          className="rogress"
          cx={params.width / 2}
          cy={params.height / 2}
          r={params.radius - 2}
        />
      </Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: number; height: number }>`
  margin: 0 auto;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

interface IProgress {
  progress: number;
  circumference: number;
  strokeWidth: number;
}

const Progress = styled.svg<IProgress>`
  transform: rotate(-90deg);

  & .rogress {
    fill: transparent;
    stroke: ${color.VIVID_ORANGE};
    stroke-width: ${props => props.strokeWidth};
    stroke-dasharray: ${props =>
      `${(props.progress / 100) * props.circumference} ${props.circumference}`};
  }

  & .white-bar {
    fill: transparent;
    stroke: ${color.WHITE};
    stroke-width: 3;
  }

  & .back {
    fill: ${color.ORANGE};
  }
`;
