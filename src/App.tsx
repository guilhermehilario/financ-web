import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './context/Auth';
import GlobalStyle from './global/reset';
import { theme } from './global/theme';
import { Root } from './routes';

export const App: React.FC = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>
);
