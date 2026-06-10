import Head from "next/head";

interface HeadComponentProps {
  title?: string;
  description?: string;
}

const DEFAULT_DESC =
  "Website resmi Desa Curah Dringu, Kecamatan Tongas, Kabupaten Probolinggo — desa pesisir di tepi Selat Madura. Layanan administrasi, informasi, dan potensi desa dalam satu tempat.";

export const HeadComponent = ({ title, description }: HeadComponentProps) => {
  const fullTitle = title
    ? `${title} | Desa Curah Dringu`
    : "Desa Curah Dringu | Website Resmi Desa Pesisir Tongas";
  const desc = description ?? DEFAULT_DESC;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

      {/* SEO */}
      <meta
        name="keywords"
        content="Desa Curah Dringu, Probolinggo, Jawa Timur, Tongas, desa pesisir, layanan desa, pengaduan warga"
      />
      <meta name="author" content="Desa Curah Dringu" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0aa48d" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://curahdringu.site" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="/content.jpeg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content="/content.jpeg" />
    </Head>
  );
};
