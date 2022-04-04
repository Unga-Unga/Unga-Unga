import '../styles/globals.css';
import NextHead from 'next/head';
import React from 'react';
import FloatingBar from '../components/floatingBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Unga Unga!</title>
      </NextHead>
      <div>
        <Component {...pageProps} />
        <FloatingBar />
      </div>
    </>
  );
}

export default MyApp;
