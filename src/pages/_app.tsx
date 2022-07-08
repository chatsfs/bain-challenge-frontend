import React from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css';
import { LocationProvider } from '@lib/context/location/location.provider';

export type ComponentWithGetLayout = AppProps & {
  Component: AppProps['Component'] & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
};

function MyApp({ Component, pageProps }: ComponentWithGetLayout) {
  return (
    <LocationProvider>
      {Component.getLayout ? Component.getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}
    </LocationProvider>
  );
}

export default MyApp;
