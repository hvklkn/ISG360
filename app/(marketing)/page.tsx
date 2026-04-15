import Link from "next/link";

import { moduleSummaries, sectorProfiles, trustStatements } from "@/data/marketing-data";

export default function MarketingHomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:grid-cols-[1.15fr_1fr] lg:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Yeni Nesil ISG Platformu</p>
          <h1 className="font-heading mt-5 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Operasyonu hizlandirin, mevzuat uyumunu olcekleyin.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            ISG360, OSGB ve kurum ekiplerinin risk, egitim, dokuman ve saha akislarini tek
            merkezde yonetmesine yardimci olan modern bir platformdur.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/demo-talep"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Demo Planla
            </Link>
            <Link
              href="/cozumler"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 px-6 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            >
              Cozumleri Incele
            </Link>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {trustStatements.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Moduller</p>
            <h2 className="font-heading mt-2 text-3xl font-semibold text-slate-950">
              Kuruma gore sekillenen cozum kutuphanesi
            </h2>
          </div>
          <Link href="/cozumler" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
            Tumunu Gor
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {moduleSummaries.slice(0, 6).map((item) => (
            <article key={item.slug} className="rounded-3xl border border-slate-200/80 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.subtitle}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <Link
                href={`/moduller/${item.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Detaylara Git
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Kimin Icin</p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-slate-950">
            Her olcekte ekibe uyumlu operasyon modeli
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sectorProfiles.map((sector) => (
            <article key={sector.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-950">{sector.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{sector.summary}</p>
              <Link
                href={`/sektorler/${sector.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Modeli Incele
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
