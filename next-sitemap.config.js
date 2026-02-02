/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://georgia-transfer.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  sitemapSize: 5000,
  exclude: ["/"],
  additionalPaths: async () => {
    const locales = ["ru", "en", "ge"];
    const paths = [
      { path: "", priority: 1.0, changefreq: "weekly" },
      { path: "/transfers", priority: 0.8, changefreq: "weekly" },
      { path: "/tours", priority: 0.8, changefreq: "weekly" },
    ];
    const result = [];
    const now = new Date().toISOString();
    for (const locale of locales) {
      for (const { path, priority, changefreq } of paths) {
        result.push({
          loc: `/${locale}${path}`,
          changefreq,
          priority,
          lastmod: now,
        });
      }
    }
    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/404"],
      },
    ],
    additionalSitemaps: [],
  },
};
