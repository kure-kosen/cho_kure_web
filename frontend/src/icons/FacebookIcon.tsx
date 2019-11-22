import React from "react";

import { CircleIconWrapper } from "@/icons/CircleIconWrapper";

export const FacebookCircleIcon = ({ id }: { id: string }) => (
  <a href={`https://www.facebook.com/${id}/`}>
    <CircleIconWrapper>
      <i className="fab fa-facebook-f fa-fw" />
    </CircleIconWrapper>
  </a>
);
