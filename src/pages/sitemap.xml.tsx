import type { GetServerSideProps } from "next";
import { SITE } from "@/data/site";

// Next.js akan serve route ini sebagai /sitemap.xml
// Daftar halaman statis — berita agregat eksternal tidak perlu di-sitemap terpisah
const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/profil", changefreq: "monthly", priority: "0.8" },
  { path: "/layanan", changefreq: "monthly", priority: "0.8" },
  { path: "/berita", changefreq: "daily", priority: "0.9" },
  { path: "/potensi", changefreq: "monthly", priority: "0.8" },
  { path: "/bumdesa", changefreq: "monthly", priority: "0.7" },
  { path: "/kontak", changefreq: "yearly", priority: "0.6" },
];

const generateSitemap = () => {
  const lastmod = new Date().toISOString();
  const urls = STATIC_ROUTES.map(
    (route) => `  <url>
    <loc>${SITE.url}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();
  return { props: {} };
};

// Default export diperlukan Next.js pages — tidak dirender karena getServerSideProps sudah end()
export default function Sitemap() {
  return null;
}
