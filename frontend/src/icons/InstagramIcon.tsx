import React from "react";

import { CircleIconWrapper } from "@/icons/CircleIconWrapper";

export const InstagramCircleIcon = ({ id }: { id: string }) => (
  <a href={`https://www.instagram.com/${id}/`}>
    <CircleIconWrapper>
      <i className="fab fa-instagram fa-fw" />
    </CircleIconWrapper>
  </a>
);
