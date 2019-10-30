import React from "react";

import { IconWrapper } from "@/icons/IconWrapper";

export const FacebookIcon = ({ id }: { id: string }) => (
  <a href={`https://www.facebook.com/${id}/`}>
    <IconWrapper>
      <i className="fab fa-facebook-f fa-fw" />
    </IconWrapper>
  </a>
);
