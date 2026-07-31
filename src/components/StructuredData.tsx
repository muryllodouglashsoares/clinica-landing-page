import { siteConfig } from "@/data/site-config";

/**
 * Schema.org structured data for a dental clinic, rendered as a JSON-LD
 * `<script>` tag. Helps search engines show rich results (address, phone,
 * rating, opening hours) for a local business — the SEO win that's
 * impossible to get from client-rendered pages.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    email: siteConfig.contact.email,
    image: siteConfig.ogImage,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
    },
    foundingDate: String(siteConfig.foundingYear),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
