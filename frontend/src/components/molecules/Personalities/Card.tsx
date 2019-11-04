import React, { useState, useCallback, RefObject } from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import { color } from "@/constants/styles";
import { PersonalityProfileAvatar } from "@/components/atoms/FeaturedPersonality/PersonalityProfileAvatar";
import { PersonalityProfileDescription } from "@/components/atoms/FeaturedPersonality/PersonalityProfileDescription";
import { PersonalityProfileModal } from "@/components/atoms/FeaturedPersonality/PersonalityProfileModal";

interface Props extends IPersonality {
  forwardRef?: RefObject<HTMLDivElement>;
}

export const PersonalityCard = (props: Props) => {
  const [isVisible, setVisible] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setVisible(true);
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, [isVisible]);

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={props.forwardRef}
    >
      <PersonalityProfileAvatar image={props.image} />
      <PersonalityProfileDescription
        name={props.name}
        nickname={props.nickname}
        affiliationName={props.affiliationName}
        affiliationDetails={props.affiliationDetails}
      />
      {(props.description ||
        props.twitterId ||
        props.facebookId ||
        props.instagramId) && (
        <PersonalityProfileModal
          visible={isVisible}
          description={props.description}
          twitterId={props.twitterId}
          facebookId={props.facebookId}
          instagramId={props.instagramId}
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
