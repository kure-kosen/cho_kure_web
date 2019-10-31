import React from "react";

import { IconWrapper } from "@/icons/IconWrapper";

export const TwitterIcon = ({ id }: { id: string }) => (
  <a href={`https://twitter.com/${id}/`}>
    <IconWrapper>
      <i className="fab fa-twitter fa-fw" />
    </IconWrapper>
  </a>
);
