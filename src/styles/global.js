import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;   
    box-sizing : border-box ;
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

  h1, h2, h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
