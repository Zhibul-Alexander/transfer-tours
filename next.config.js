/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
