import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./Base";
import { OrangeButton } from "./Button";

interface Props extends ButtonProps {
  as: "Button" | "InternalLink" | "ExternalLink";
  href?: string;
}
export const MoreButton: FC<Props> = ({ as, href, ...props }) => {
  switch (as) {
    case "Button":
      href && console.warn("This 'MoreButton' pretends to be button tag");

      return useMemo(
        () => (
          <OrangeButton
            minWidth={200}
            size="large"
            style={{ margin: "0 auto" }}
            {...props}
          >
            more
          </OrangeButton>
        ),
        []
      );

    case "InternalLink":
      return useMemo(
        () => (
          <OrangeButton
            minWidth={200}
            size="large"
            style={{ margin: "0 auto" }}
            as={Link}
            to={href}
            {...props}
          >
            more
          </OrangeButton>
        ),
        [href]
      );

    case "ExternalLink":
      return useMemo(
        () => (
          <OrangeButton
            minWidth={200}
            size="large"
            style={{ margin: "0 auto" }}
            as="a"
            href={href}
            {...props}
          >
            more
          </OrangeButton>
        ),
        [href]
      );

    default:
      return null;
  }
};
