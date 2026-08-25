import Head from "next/head";
import { useRouter } from "next/router";
import { SITE } from "@/data/site";
import {
  getBreadcrumbJsonLd,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/seo";

interface HeadComponentProps {
  title?: string;
  description?: string;
  /** Path kanonikal, mis. "/profil". Jika kosong, diambil dari router. */
  canonicalPath?: string;
  /** URL gambar absolut untuk OG/Twitter. Default /content.jpeg */
  image?: string;
  /** Tipe Open Graph — website | article */
  ogType?: "website" | "article";
  /** Breadcrumb untuk JSON-LD. Jika tidak diberikan, default Home saja. */
  breadcrumbs?: Array<{ name: string; url: string }>;
  /** Matikan index untuk halaman tertentu */
  noIndex?: boolean;
}

const DEFAULT_DESC = SITE.description;

export const HeadComponent = ({
  title,
  description,
  canonicalPath,
  image,
  ogType = "website",
  breadcrumbs,
  noIndex = false,
}: HeadComponentProps) => {
  const router = useRouter();
  const fullTitle = title
    ? `${title} | Desa Curah Dringu`
    : SITE.title;
  const desc = description ?? DEFAULT_DESC;
  const path =
    (canonicalPath ?? router.asPath.split("?")[0].split("#")[0]) || "/";
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const canonicalUrl = `${SITE.url}${normalizedPath}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE.url}${image.startsWith("/") ? image : `/${image}`}`
    : `${SITE.url}/content.jpeg`;

  const websiteJsonLd = getWebsiteJsonLd();
  const orgJsonLd = getOrganizationJsonLd();
  const breadcrumbJsonLd = breadcrumbs
    ? getBreadcrumbJsonLd(breadcrumbs)
    : getBreadcrumbJsonLd([{ name: "Beranda", url: SITE.url }]);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

      {/* SEO */}
      <meta name="keywords" content={SITE.keywords} />
      <meta name="author" content={SITE.name} />
      <meta
        name="robots"
        content={
          noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content={SITE.themeColor} />
      <meta name="format-detection" content="telephone=no" />
      {SITE.googleSiteVerification && (
        <meta
          name="google-site-verification"
          content={SITE.googleSiteVerification}
        />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      {SITE.twitterHandle && (
        <meta name="twitter:site" content={SITE.twitterHandle} />
      )}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      {breadcrumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
    </Head>
  );
};
