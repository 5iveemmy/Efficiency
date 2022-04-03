import { createGlobalStyle } from "styled-components";
import Gelion from "./fonts/Gelion-Regular.woff2";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Gelion', sans-serif;
}
`;

export const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Gelion';
    src: url(${Gelion}) format('woff2');
}

`;
