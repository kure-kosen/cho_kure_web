import { css } from "styled-components";

import Quicksand300Woff from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-300.woff";
import Quicksand300Woff2 from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-300.woff2";
import Quicksand500Woff from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-500.woff";
import Quicksand500Woff2 from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-300.woff2";
import Quicksand700Woff from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-700.woff";
import Quicksand700Woff2 from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-700.woff2";
import QuicksandRegularWoff from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-regular.woff";
import QuicksandRegularWoff2 from "../../../fonts/quicksand-v7-latin/quicksand-v7-latin-regular.woff2";

export default css`
  /* quicksand-300 - latin */
  @font-face {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 300;
    src: local("Quicksand Light"), local("Quicksand-Light"),
      url(${Quicksand300Woff2}) format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${Quicksand300Woff})
        format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* quicksand-regular - latin */
  @font-face {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 400;
    src: local("Quicksand Regular"), local("Quicksand-Regular"),
      url(${QuicksandRegularWoff2}) format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${QuicksandRegularWoff})
        format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* quicksand-500 - latin */
  @font-face {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 500;
    src: local("Quicksand Medium"), local("Quicksand-Medium"),
      url(${Quicksand500Woff2}) format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${Quicksand500Woff})
        format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* quicksand-700 - latin */
  @font-face {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;
    src: local("Quicksand Bold"), local("Quicksand-Bold"),
      url(${Quicksand700Woff2}) format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${Quicksand700Woff})
        format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  body {
    font-family: "Quicksand";
    font-weight: 400;
  }
`;
