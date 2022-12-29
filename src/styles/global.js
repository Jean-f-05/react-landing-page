import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;    
  }

  html {
    font-size: 62.5%
  }

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
