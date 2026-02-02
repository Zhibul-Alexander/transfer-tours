import Head from "next/head";
import { SiteContent } from "../content/types";

type Props = {
  content: SiteContent;
  title?: string;
  description?: string;
  path?: string; // e.g. "/transfers"
};

function absoluteUrl(base: string, path: string) {
  const trimmedBase = base.replace(/\/$/, "");
  let trimmedPath = path.startsWith("/") ? path : `/${path}`;
  if (trimmedPath !== "/" && !trimmedPath.endsWith("/")) trimmedPath += "/";
  return `${trimmedBase}${trimmedPath}`;
}

export default function Seo({ content, title, description, path = "/" }: Props) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://georgia-transfer.com";
  const locale = content.locale;
  
  // path уже содержит локаль (например /ru или /ru/transfers)
  // Если передан относительный путь, добавляем локаль
  const canonicalPath =
    path.startsWith("/ru") || path.startsWith("/en") || path.startsWith("/ge")
      ? path
      : `/${locale}${path === "/" ? "" : path}`;
  const canonical = absoluteUrl(siteUrl, canonicalPath);

  const pathWithoutLocale = canonicalPath.replace(/^\/(ru|en|ge)/, "") || "/";
  const pathSuffix = pathWithoutLocale === "/" ? "" : pathWithoutLocale;

  const fullTitle = title ? `${title} — ${content.seo.siteName}` : content.seo.defaultTitle;
  const fullDescription = (description || content.seo.defaultDescription).slice(0, 160);

  const ogImage = absoluteUrl(siteUrl, "/images/og.svg");
  const ogImageAlt = content.seo.siteName;

  const ogLocales: Record<string, string> = { ru: "ru_RU", en: "en_US", ge: "ka_GE" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: content.seo.siteName,
    url: siteUrl,
    areaServed: [content.seo.country],
    address: {
      "@type": "PostalAddress",
      addressLocality: content.seo.city,
      addressCountry: content.seo.country,
    },
    sameAs: [
      content.contacts.data.telegram,
      content.contacts.data.whatsapp,
      content.contacts.data.instagram,
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: content.contacts.data.phone,
        email: content.contacts.data.email,
        availableLanguage: ["Russian", "English", "Georgian"],
      },
    ],
  };

  const homeUrl = absoluteUrl(siteUrl, `/${locale}/`);
  const breadcrumbItems: { name: string; url: string }[] = [
    { name: content.nav.home, url: homeUrl },
  ];
  if (canonicalPath.includes("/transfers")) {
    breadcrumbItems.push({
      name: content.nav.transfers,
      url: absoluteUrl(siteUrl, `/${locale}/transfers/`),
    });
  } else if (canonicalPath.includes("/tours")) {
    breadcrumbItems.push({
      name: content.nav.tours,
      url: absoluteUrl(siteUrl, `/${locale}/tours/`),
    });
  }
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={content.seo.keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={content.seo.siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no, email=no" />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={content.seo.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content="image/svg+xml" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocales[locale] || "ru_RU"} />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="ru_RU" />
      <meta property="og:locale:alternate" content="ka_GE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Language alternates (ru, en, ka = Georgian) */}
      <link rel="alternate" hrefLang="ru" href={absoluteUrl(siteUrl, `/ru${pathSuffix}`)} />
      <link rel="alternate" hrefLang="en" href={absoluteUrl(siteUrl, `/en${pathSuffix}`)} />
      <link rel="alternate" hrefLang="ka" href={absoluteUrl(siteUrl, `/ge${pathSuffix}`)} />
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(siteUrl, `/ru${pathSuffix}`)} />

      {/* Geo (optional) */}
      <meta name="geo.region" content="GE" />
      <meta name="geo.placename" content={content.seo.city} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
    </Head>
  );
}
