import Head from "next/head";

export const HeadComponent = () => {
  return (
    <Head>
      <title>Desa Curah Dringu | Official Website</title>
      <meta
        name="description"
        content="Curah Dringu adalah sebuah desa yang berada di Kecamatan Tongas, Kabupaten Probolinggo, provinsi Jawa Timur, Indonesia. Curah Dringu merupakan salah satu desa di Kec. Tongas yang terletak di pantai Selat Madura."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

      {/* SEO Tags */}
      <meta
        name="keywords"
        content="Desa Curah Dringu, Probolinggo, Jawa Timur, Indonesia, Tongas"
      />
      <meta name="author" content="Desa Curah Dringu" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://curahdringu.site" />
      <meta
        property="og:title"
        content="Desa Curah Dringu | Official Website"
      />
      <meta
        property="og:description"
        content="Curah Dringu adalah sebuah desa yang berada di Kecamatan Tongas, Kabupaten Probolinggo, provinsi Jawa Timur, Indonesia."
      />
      <meta property="og:image" content="/favicon.ico" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://curahdringu.site" />
      <meta
        property="twitter:title"
        content="Desa Curah Dringu | Official Website"
      />
      <meta
        property="twitter:description"
        content="Curah Dringu adalah sebuah desa yang berada di Kecamatan Tongas, Kabupaten Probolinggo, provinsi Jawa Timur, Indonesia."
      />
      <meta property="twitter:image" content="/favicon.ico" />
    </Head>
  );
};
