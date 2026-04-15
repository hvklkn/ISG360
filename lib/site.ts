const DEFAULT_SITE_URL = "http://localhost:3000";

export const siteConfig = {
  name: "ISG360",
  shortName: "ISG360",
  title: "ISG360 | Yeni Nesil Is Sagligi ve Guvenligi Platformu",
  description:
    "ISG360; risk, egitim, dokuman ve denetim sureclerini tek merkezde yoneten yeni nesil is sagligi ve guvenligi platformudur.",
  locale: "tr_TR",
} as const;

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    DEFAULT_SITE_URL;

  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function withBaseUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}
