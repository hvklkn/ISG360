import Link from "next/link";

import { blogPosts } from "@/data/marketing-data";

export const metadata = {
  title: "Blog",
  description: "ISG operasyonu, risk ve egitim yonetimi uzerine icerikler.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Blog</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          ISG ekipleri icin pratik bilgi merkezi
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          Saha operasyonu, dijital donusum ve mevzuat uyumu konularinda ekiplerin hemen
          uygulayabilecegi rehberler.
        </p>
      </section>

      <section className="grid gap-5">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-700">{post.category}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-slate-500">{post.date}</span>
              <Link href="#" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
                Devamini Oku
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
