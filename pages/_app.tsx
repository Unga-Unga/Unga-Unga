import '../styles/globals.css';
import NextHead from 'next/head';
import React from 'react';
import { UserProvider } from '../providers/user.provider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Unga Unga!</title>
      </NextHead>
      <div>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </div>
    </>
  );
}

export default MyApp;
