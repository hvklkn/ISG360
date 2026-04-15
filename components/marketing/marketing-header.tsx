import Link from "next/link";

import { marketingNavigation } from "@/data/marketing-data";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-sky-500 text-sm font-bold text-white">
            I360
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Platform</p>
            <p className="font-heading text-lg font-semibold text-slate-950">ISG360</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {marketingNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/giris"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Portal Girisi
          </Link>
          <Link
            href="/demo-talep"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Demo Talep Et
          </Link>
        </div>
      </div>
    </header>
  );
}
