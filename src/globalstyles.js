import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;

        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
