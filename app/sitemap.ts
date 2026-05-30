import type { MetadataRoute } from "next";

const siteUrl = "https://www.joabrav.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/projects/victoria", "/projects/eduardo"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
