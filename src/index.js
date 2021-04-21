import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/Theme/theme';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
