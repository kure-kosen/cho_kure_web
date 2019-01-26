import * as React from "react";
import styled from "styled-components";

import { ButtonLink } from "../commons/ButtonLink";

export interface IProps {
  to: string;
}

export const MoreButtonLink = (props: IProps) => <LinkTag to={props.to} text="more" />;

const LinkTag = styled(ButtonLink)`
  width: 110px;
`;
