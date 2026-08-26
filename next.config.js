/** @type {import('next').NextConfig} */
const isCloudflarePages = process.env.CF_PAGES === "1";

const nextConfig = {
  output: isCloudflarePages ? "export" : undefined,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn-jpr.jawapos.com" },
      { protocol: "https", hostname: "cdn-radar.jawapos.com" },
      { protocol: "https", hostname: "cdn-assets.jawapos.com" },
      { protocol: "https", hostname: "cdn.tadatodays.com" },
      { protocol: "https", hostname: "pojoknasional.co.id" },
      { protocol: "https", hostname: "humas.polri.go.id" },
      { protocol: "https", hostname: "kemenlh.go.id" },
      { protocol: "https", hostname: "www.pasuruankab.go.id" },
      { protocol: "https", hostname: "bakorwilbojonegoro.jatimprov.go.id" },
      { protocol: "https", hostname: "unair.ac.id" },
      { protocol: "https", hostname: "probolinggokab.go.id" },
      { protocol: "https", hostname: "sudutpandang.id" },
      { protocol: "https", hostname: "radarpatroli.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "sidita.disbudpar.jatimprov.go.id" },
      // Fallback wildcard for any future image CDN
      { protocol: "https", hostname: "**.jawapos.com" },
      { protocol: "https", hostname: "**.probolinggokab.go.id" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  headers: isCloudflarePages
    ? undefined
    : async () => [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ],
  redirects: isCloudflarePages
    ? undefined
    : async () => [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.curahdringu.my.id" }],
        destination: "https://curahdringu.my.id/:path*",
        permanent: true,
      },
    ],
};

module.exports = nextConfig;
