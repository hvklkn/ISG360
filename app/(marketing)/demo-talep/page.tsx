export const metadata = {
  title: "Demo Talep",
  description: "ISG360 platformu icin demo talep formu.",
};

export default function DemoRequestPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Demo Talep</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          ISG360 icin canli urun turu planlayin
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          Ekip buyuklugunuzu ve ihtiyacinizi paylasin, size en uygun kurulum modelini birlikte
          sekillendirelim.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
        <form className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Ad Soyad"
            className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500"
          />
          <input
            type="text"
            placeholder="Kurum Adi"
            className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500"
          />
          <input
            type="email"
            placeholder="E-posta"
            className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500"
          />
          <input
            type="tel"
            placeholder="Telefon"
            className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500"
          />
          <select className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500">
            <option>Segment Secin</option>
            <option>Kobi-Kamu</option>
            <option>OSGB</option>
            <option>Bireysel Uzman</option>
          </select>
          <select className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500">
            <option>Calisan Sayisi</option>
            <option>0-250</option>
            <option>251-1000</option>
            <option>1000+</option>
          </select>
          <textarea
            rows={6}
            placeholder="Ihtiyacinizi kisaca anlatin"
            className="md:col-span-2 rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500"
          />
          <button
            type="submit"
            className="md:col-span-2 inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Demo Talebini Gonder
          </button>
        </form>
      </section>
    </div>
  );
}
