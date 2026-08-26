import { SITE, VILLAGE } from "@/data/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const getCanonicalUrl = (path: string = "/") => {
  const cleanPath = path.split("?")[0].split("#")[0];
  const normalized = cleanPath === "/" ? "/" : cleanPath.replace(/\/$/, "");
  return `${SITE.url}${normalized === "/" ? "/" : normalized}`;
};

/** WebSite + SearchAction — membantu Google menampilkan sitelinks search box */
export const getWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  alternateName: ["Curahdringu", "Desa Curah Dringu Tongas"],
  url: SITE.url,
  description: SITE.description,
  inLanguage: "id-ID",
  publisher: { "@id": `${SITE.url}#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/berita?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

/** GovernmentOrganization — entitas resmi desa untuk Knowledge Panel */
export const getOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "@id": `${SITE.url}#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/content.jpeg`,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Curah Dringu",
    addressLocality: "Tongas",
    addressRegion: "Jawa Timur",
    postalCode: "67252",
    addressCountry: "ID",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: `${VILLAGE.name}, ${VILLAGE.district}, ${VILLAGE.regency}`,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: VILLAGE.phone,
      email: VILLAGE.email,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id", "jv"],
    },
  ],
  sameAs: [] as string[],
});

/** LocalBusiness Schema — untuk local SEO di Google Maps & pencarian lokal */
export const getLocalBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}#localbusiness`,
  name: SITE.name,
  image: `${SITE.url}/content.jpeg`,
  description: SITE.description,
  url: SITE.url,
  telephone: VILLAGE.phone,
  email: VILLAGE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Curah Dringu",
    addressLocality: "Tongas",
    addressRegion: "Jawa Timur",
    postalCode: "67252",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.732694,
    longitude: 113.109103,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  priceRange: "Gratis",
});

export const getBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/** Untuk halaman berita — opsional, bisa dipakai per artikel */
export const getNewsArticleJsonLd = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: article.title,
  description: article.description,
  image: [article.image],
  datePublished: article.datePublished,
  author: { "@type": "Organization", name: SITE.name, url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
});

/** FAQ Schema untuk halaman yang memiliki tanya-jawab */
export const getFAQJsonLd = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
