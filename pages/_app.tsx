import * as intl from 'react-intl-universal';
import createEmotionCache from 'utils/createEmotionCache';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from 'themes/mainTheme';
import { LOCALES_DATA } from 'locales/locales';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

intl.init({
  currentLocale: 'en-US',
  locales: LOCALES_DATA,
  commonLocaleDataUrls: {},
});

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
