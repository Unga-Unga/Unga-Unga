import '../styles/globals.css';
import NextHead from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Unga Unga!</title>
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
