import Link from "next/link";

import { moduleSummaries, sectorProfiles } from "@/data/marketing-data";

export const metadata = {
  title: "Cozumler",
  description: "ISG360 modulleri ve sektor bazli kullanim senaryolari.",
};

export default function SolutionsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Cozum Haritasi</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          Moduler yapida, tek platform deneyimi
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          ISG360 modulleri tek bir veri omurgasi uzerinde calisir. Bu sayede farkli ekipler
          ayni operasyon hedeflerine hizli ve denetlenebilir sekilde ulasir.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {moduleSummaries.map((item) => (
          <article key={item.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.subtitle}</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {item.highlights.map((line) => (
                <li key={line}>- {line}</li>
              ))}
            </ul>
            <Link
              href={`/moduller/${item.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Modul Detayi
            </Link>
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-3xl font-semibold text-slate-950">Sektor Paketleri</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {sectorProfiles.map((sector) => (
            <article key={sector.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-950">{sector.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{sector.summary}</p>
              <Link
                href={`/sektorler/${sector.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Senaryoyu Ac
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
