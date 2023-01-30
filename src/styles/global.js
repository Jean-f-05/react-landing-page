import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing : border-box ;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
    margin: ${({ theme }) => theme.spacing.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }

  ul,ol {
    margin: ${({ theme }) => theme.spacing.medium};
    padding: ${({ theme }) => theme.spacing.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
    }
`;

export default GlobalStyle;
