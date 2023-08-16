import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';


import '@/styles/globals.css';
import Layout from '@/layout/layout';
import * as gtag from '@/utils//gtag';
import metaTags from '@/data/metaTags.json';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="author" content="Teddy Deleon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        {metaTags.map((tag) => (
          <meta property={tag.property} content={tag.content} key={tag.id} />
        ))}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Nova+Slim&display=swap');
        </style>

      </Head>
    
        <Layout>
          <Component {...pageProps} />
        </Layout>
     
    </>
  );
}

export default MyApp;
