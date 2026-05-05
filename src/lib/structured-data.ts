export const SITE_URL = "https://www.datasourceinc.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DataSource Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/dsource-logo.png`,
  sameAs: ["https://www.linkedin.com/company/datasourceinc"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1749 Old Meadow Road, Suite 350",
    addressLocality: "McLean",
    addressRegion: "VA",
    postalCode: "22102",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-703-748-7180",
    contactType: "sales",
    email: "lklotzsche@datasourceinc.com",
    url: `${SITE_URL}/contact`,
    areaServed: "US",
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DataSource Inc.",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "DataSource Inc." },
};

export function articleSchema(args: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}/insights/${args.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "DataSource Inc." },
    publisher: {
      "@type": "Organization",
      name: "DataSource Inc.",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/dsource-logo.png` },
    },
    datePublished: args.datePublished ?? "2025-01-01",
    dateModified: args.dateModified ?? args.datePublished ?? "2025-01-01",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLd(data: object) {
  return { __html: JSON.stringify(data) };
}
