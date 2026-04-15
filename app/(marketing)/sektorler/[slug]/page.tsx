import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getModuleBySlug, getSectorBySlug, sectorProfiles } from "@/data/marketing-data";

type SectorDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectorProfiles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: SectorDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return { title: "Sektor Bulunamadi" };
  }

  return {
    title: `${sector.name} Cozumu`,
    description: sector.summary,
  };
}

export default async function SectorDetailPage({ params }: SectorDetailPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  const relatedModules = sector.recommendedModules
    .map((slug) => getModuleBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Sektor Odakli Paket</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          {sector.name}
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">{sector.summary}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-950">Oncelikli Ihtiyaclar</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {sector.priorities.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-950">Onerilen Moduller</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {relatedModules.map((item) => (
              <li key={item.slug}>
                <Link href={`/moduller/${item.slug}`} className="font-semibold text-teal-700 hover:text-teal-800">
                  {item.title}
                </Link>
                <p className="mt-1 text-slate-600">{item.subtitle}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <Link
        href="/demo-talep"
        className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Bu Paket Icin Demo Talep Et
      </Link>
    </div>
  );
}
