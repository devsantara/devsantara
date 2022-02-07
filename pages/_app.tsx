import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { gtagPageview } from '@/libs';

// styles
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url: URL) => {
      gtagPageview(url);
    };

    router.events.on('routeChangeComplete', handleRouterChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;
