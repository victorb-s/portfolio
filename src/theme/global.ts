import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        max-width: 100vw;
        scroll-behavior: smooth;
        word-wrap: break-word;
        overflow-wrap: break-word;
        
        font-family: "Roboto", sans-serif;
    }

    body, html{
        overflow-x: hidden;
        background: #EBE9DF;
    }
`;
