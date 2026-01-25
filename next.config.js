/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    localeDetection: false, // Отключаем автоматическое определение локали для Cloudflare Pages
  },
  compiler: {
    styledComponents: true,
  },
  // Для Cloudflare Pages важно не использовать output: 'export'
  // так как это сломает i18n routing
};

module.exports = nextConfig;
