import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sholok Delivery Area & Rate Management" },
      { name: "description", content: "Manage Bangladesh delivery areas, rate groups and zone assignments." },
      { property: "og:title", content: "Sholok Delivery Area & Rate Management" },
      { property: "og:description", content: "Manage Bangladesh delivery areas, rate groups and zone assignments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/sholok/index.html"
      title="Sholok Delivery Area & Rate Management"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
