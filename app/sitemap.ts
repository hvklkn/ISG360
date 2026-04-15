import type { MetadataRoute } from "next";

import { moduleSummaries, sectorProfiles } from "@/data/marketing-data";
import { getSiteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/cozumler",
  "/kurumsal",
  "/guvenlik-uyumluluk",
  "/iletisim",
  "/demo-talep",
  "/blog",
  "/giris",
  "/login",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const moduleEntries = moduleSummaries.map((item) => ({
    url: `${baseUrl}/moduller/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const sectorEntries = sectorProfiles.map((item) => ({
    url: `${baseUrl}/sektorler/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...moduleEntries, ...sectorEntries];
}
