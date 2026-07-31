import { createFileRoute } from "@tanstack/react-router";
import { OdontoPrimeLandingPage } from "@/components/OdontoPrimeLandingPage";
import { siteConfig } from "@/data/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — Clínica Odontológica Premium em ${siteConfig.address.city}` },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: `${siteConfig.name} — ${siteConfig.tagline}` },
      {
        property: "og:description",
        content: "Cuidado odontológico de excelência com tecnologia de ponta e atendimento humanizado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteConfig.url },
      { property: "og:image", content: siteConfig.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${siteConfig.name} — ${siteConfig.tagline}` },
      { name: "twitter:description", content: siteConfig.description },
      { name: "twitter:image", content: siteConfig.ogImage },
    ],
    links: [{ rel: "canonical", href: siteConfig.url }],
  }),
  component: Index,
});

function Index() {
  return <OdontoPrimeLandingPage />;
}
