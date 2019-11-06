import React from "react";

import { CircleIconWrapper } from "@/icons/CircleIconWrapper";

export const TwitterCircleIcon = ({ id }: { id: string }) => (
  <a href={`https://twitter.com/${id}/`}>
    <CircleIconWrapper>
      <i className="fab fa-twitter fa-fw" />
    </CircleIconWrapper>
  </a>
);
