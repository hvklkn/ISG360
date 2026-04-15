export const metadata = {
  title: "Iletisim",
  description: "ISG360 satis ve urun ekibi ile iletisime gecin.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Iletisim</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          Ekibimizle iletisime gecin
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Uygun paket, teknik entegrasyon veya urun yol haritasi sorulariniz icin bize ulasin.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-950">Ofis Bilgileri</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p>Istanbul Teknokent, Avcilar / Istanbul</p>
            <p>+90 (212) 000 00 00</p>
            <p>hello@isg360.com</p>
            <p>Pzt-Cuma: 09:00 - 18:00</p>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-950">Mesaj Birakin</h2>
          <form className="mt-5 grid gap-4">
            <input
              type="text"
              placeholder="Ad Soyad"
              className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500"
            />
            <input
              type="email"
              placeholder="E-posta"
              className="h-11 rounded-xl border border-slate-300 px-3 text-sm text-slate-900 outline-none focus:border-slate-500"
            />
            <textarea
              placeholder="Mesajiniz"
              rows={5}
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Mesaji Gonder
            </button>
          </form>
        </article>
      </section>
    </div>
  );
}
