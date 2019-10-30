import React from "react";

import { IconWrapper } from "@/icons/IconWrapper";

export const InstagramIcon = ({ id }: { id: string }) => (
  <a href={`https://www.instagram.com/${id}/`}>
    <IconWrapper>
      <i className="fab fa-instagram fa-fw" />
    </IconWrapper>
  </a>
);
