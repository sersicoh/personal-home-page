import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: initial;
  }

  body {
    //margin: 20px;
    background: ${({theme}) => theme.colors.background};
    font-family: Inter, sans-serif;
    sans-serif;
  }
`;