import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getModuleBySlug, moduleSummaries } from "@/data/marketing-data";

type ModuleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return moduleSummaries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ModuleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const moduleData = getModuleBySlug(slug);

  if (!moduleData) {
    return { title: "Modul Bulunamadi" };
  }

  return {
    title: `${moduleData.title} Modulu`,
    description: moduleData.description,
  };
}

export default async function ModuleDetailPage({ params }: ModuleDetailPageProps) {
  const { slug } = await params;
  const moduleData = getModuleBySlug(slug);

  if (!moduleData) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{moduleData.subtitle}</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          {moduleData.title}
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">{moduleData.description}</p>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">One Cikan Ozellikler</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {moduleData.highlights.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Oncelikli Kullanim Segmentleri</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {moduleData.forSegments.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/demo-talep"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Bu Modul Icin Demo Isteyin
        </Link>
        <Link
          href="/cozumler"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Cozum Listesine Don
        </Link>
      </div>
    </div>
  );
}
