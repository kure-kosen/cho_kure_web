import React, { RefObject } from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import { color } from "@/constants/styles";
import Picture from "@/components/atoms/FeaturedPersonality/Picture";
import DescriptionArea from "@/components/atoms/FeaturedPersonality/DescriptionArea";
import Modal from "@/components/atoms/FeaturedPersonality/Modal";

interface IProps extends IPersonality {
  forwardRef?: RefObject<HTMLDivElement>;
}

export default (props: IProps) => {
  const [isVisible, setVisible] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    setVisible(true);
  }, [isVisible]);

  const handleMouseLeave = React.useCallback(() => {
    setVisible(false);
  }, [isVisible]);

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={props.forwardRef}
    >
      <Picture image={props.image} />
      <DescriptionArea name={props.name} nickname={props.nickname} />
      {(props.description ||
        props.twitter_id ||
        props.facebook_id ||
        props.instagram_id) && (
        <Modal
          visible={isVisible}
          description={props.description}
          twitter_id={props.twitter_id}
          facebook_id={props.facebook_id}
          instagram_id={props.instagram_id}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto 30px auto;
  color: ${color.BLACK};
  border-radius: 8px;
  font-weight: bold;
  border: 3px solid ${color.SKY_BLUE};
  background-color: ${color.WHITE};
  box-shadow: 4px 3px 10px 0px ${color.SHADOW};
  position: relative;
`;
