import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OdontoPrime — Clínica Odontológica Premium em São Paulo" },
      {
        name: "description",
        content:
          "Clínica odontológica premium com tecnologia digital, atendimento humanizado e +5.000 sorrisos transformados. Agende sua avaliação gratuita.",
      },
      { property: "og:title", content: "OdontoPrime — Sorrisos que Transformam Vidas" },
      {
        property: "og:description",
        content:
          "Cuidado odontológico de excelência com tecnologia de ponta e atendimento humanizado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// A landing page é HTML/CSS/JS puro em /public/odontoprime — redirecionamos para ela.
function Index() {
  useEffect(() => {
    window.location.replace("/odontoprime/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Carregando OdontoPrime…</p>
    </div>
  );
}
