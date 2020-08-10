import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '@Styles/global';
import theme from '@Styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
