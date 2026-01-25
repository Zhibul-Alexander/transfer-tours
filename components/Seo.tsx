import Head from "next/head";
import { useRouter } from "next/router";
import { SiteContent } from "../content/types";

type Props = {
  content: SiteContent;
  title?: string;
  description?: string;
  path?: string; // e.g. "/transfers"
};

function absoluteUrl(base: string, path: string) {
  const trimmedBase = base.replace(/\/$/, "");
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}

export default function Seo({ content, title, description, path = "/" }: Props) {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const locale = router.locale || content.locale;

  const fullTitle = title ? `${title} — ${content.seo.siteName}` : content.seo.defaultTitle;
  const fullDescription = description || content.seo.defaultDescription;
  const canonical = absoluteUrl(siteUrl, locale === "ru" ? path : `/${locale}${path}`);

  const ogImage = absoluteUrl(siteUrl, "/images/og.svg");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": content.seo.siteName,
    "url": siteUrl,
    "areaServed": [content.seo.country],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": content.seo.city,
      "addressCountry": content.seo.country
    },
    "sameAs": [
      content.contacts.data.telegram,
      content.contacts.data.whatsapp,
      content.contacts.data.instagram
    ].filter(Boolean),
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": content.contacts.data.phone,
        "email": content.contacts.data.email,
        "availableLanguage": ["ru", "en"]
      }
    ]
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={content.seo.keywords.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={content.seo.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="ru" href={absoluteUrl(siteUrl, path)} />
      <link rel="alternate" hrefLang="en" href={absoluteUrl(siteUrl, `/en${path}`)} />
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(siteUrl, path)} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
