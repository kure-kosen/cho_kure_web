import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";

export default ({ image }: Pick<IPersonality, "image">) => {
  const ref = React.useRef<HTMLImageElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.height);
  }, [ref]);

  return <Img src={image} ref={ref} width={height} />;
};

const Img = styled.img<{ width: number }>`
  width: ${props => props.width};
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
`;
