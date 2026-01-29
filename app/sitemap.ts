import { getAllDocs } from "@/lib/doc-helper";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xypriss.nehonix.com";
  const docs = getAllDocs();

  const docEntries = docs.map((doc) => ({
    url: `${baseUrl}/docs${doc.slug ? `/${doc.slug}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "hourly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...docEntries,
  ];
}
