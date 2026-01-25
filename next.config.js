/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  output: 'export', // Статический экспорт для Cloudflare Pages
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true, // Требуется для статического экспорта
  },
};

module.exports = nextConfig;
