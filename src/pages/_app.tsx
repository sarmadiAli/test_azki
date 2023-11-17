import type { AppProps } from 'next/app';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '../createEmotionCache';
import makeTheme from '../styles/makeTheme';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '../layout';
import './../styles/globals.css';
import { MyContextProvider } from '../context/myContext';
import { ContextProviderSnackBar } from 'src/context/snackBarContext';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = makeTheme();

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <CacheProvider value={{ ...clientSideEmotionCache, ...cacheRtl }}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ContextProviderSnackBar>
            <MyContextProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </MyContextProvider>
          </ContextProviderSnackBar>

          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
}
