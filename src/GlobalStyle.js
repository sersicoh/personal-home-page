import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: initial;
    }

    body{
    margin: 0 auto;
    background: #eee;
    font-family: 'Inter', sans-serif;
    }
`;
