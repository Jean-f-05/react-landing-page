import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Heading from './components/Heading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
