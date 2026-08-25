import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Preconnect untuk CDN gambar — kurangi DNS lookup */}
        <link rel="preconnect" href="https://cdn-jpr.jawapos.com" />
        <link rel="preconnect" href="https://cdn-assets.jawapos.com" />
        <link rel="dns-prefetch" href="https://pojoknasional.co.id" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
