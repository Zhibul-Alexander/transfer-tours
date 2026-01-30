/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  sitemapSize: 5000,
  exclude: [
    '/', // Исключаем корневой редирект
  ],
  // Генерируем sitemap для всех локалей
  additionalPaths: async (config) => {
    const locales = ['ru', 'en', 'ge'];
    const paths = [
      { path: '', priority: 1.0, changefreq: 'weekly' }, // Главная страница
      { path: '/transfers', priority: 0.8, changefreq: 'weekly' },
      { path: '/tours', priority: 0.8, changefreq: 'weekly' },
    ];
    const result = [];

    for (const locale of locales) {
      for (const { path, priority, changefreq } of paths) {
        result.push({
          loc: `/${locale}${path}`,
          changefreq,
          priority,
          lastmod: new Date().toISOString(),
        });
      }
    }

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [],
  },
};
