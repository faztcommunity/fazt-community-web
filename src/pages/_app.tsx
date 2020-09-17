import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '@Styles/GlobalStyles';
import theme from '@Styles/theme';
import themeNew from '@Styles/themeNew';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={themeNew}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default App;
