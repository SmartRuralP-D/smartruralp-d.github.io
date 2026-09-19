import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/landing/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartRural | Monitoramento para operações rurais" },
      {
        name: "description",
        content:
          "A SmartRural ajuda operações de aquicultura e avicultura a acompanharem suas informações pelo celular e computador.",
      },
      { property: "og:title", content: "SmartRural | Monitoramento para operações rurais" },
      {
        property: "og:description",
        content: "Acompanhe informações importantes da sua operação, onde estiver.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
