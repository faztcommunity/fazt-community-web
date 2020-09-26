import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import GlobalStyles from '@Styles/GlobalStyles';
import theme from '@Styles/theme';

const queryCache = new QueryCache();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </ReactQueryCacheProvider>
  );
};

export default App;
