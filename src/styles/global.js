import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
  }

  body,
  input,
  button {
    font-family: Georgia,'sans-serif';
  }
`;

export default GlobalStyles;
