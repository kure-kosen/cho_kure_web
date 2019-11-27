import React, { FC } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton
} from "react-share";
import { FacebookIcon, TwitterIcon, LineIcon } from "react-share";

interface Props {
  url: string;
  text: string;
}

// NOTE: https://github.com/nygardk/react-share/issues/233 - Facebook: Parameter 'href' should represent a valid URL
export const FacebookShare: FC<Props> = ({ text, url }) => (
  <FacebookShareButton url={url} quote={text}>
    <FacebookIcon size={32} round />
  </FacebookShareButton>
);

export const TwitterShare: FC<Props> = ({ text, url }) => (
  <TwitterShareButton
    title={text}
    via="cho_kure"
    hashtags={["ちょっくれ"]}
    url={url}
  >
    <TwitterIcon size={32} round />
  </TwitterShareButton>
);

export const LineShare: FC<Props> = ({ text, url }) => (
  <LineShareButton title={text} url={url}>
    <LineIcon size={32} round />
  </LineShareButton>
);
