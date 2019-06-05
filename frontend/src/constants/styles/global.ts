import { createGlobalStyle } from "styled-components";

import fontsFamily from "@/constants/styles/fontsFamily";

export default createGlobalStyle`
  ${fontsFamily}

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
         -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
            box-sizing: border-box;
  };

  ul, li {
    margin: 0;
    padding: 0;
  };

  input, button, textarea, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
  };

  button {
    background-color: transparent;
    cursor: pointer;
  };

  a {
    text-decoration: none;
  };

  nav {
    display: inline;
  }
`;
