export const metadata = {
  title: "Kurumsal",
  description: "ISG360 sirket profili, yaklasimi ve operasyon standartlari.",
};

const principles = [
  "Musteri basarisini urun kararlarinin merkezine koymak",
  "Mevzuat degisimlerine hizli uyum saglayan surdurulebilir mimari",
  "Veri guvenligi ve denetlenebilirligi temel urun ilkesi olarak sahiplenmek",
  "Sahadan gelen geri bildirimi urun dongusune hizla tasimak",
];

export default function CorporatePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Kurumsal</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          ISG teknolojisinde guvenilir donusum ortagi
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          ISG360 ekibi; operasyonu sade, olceklenebilir ve denetlenebilir hale getiren urunler
          gelistirir. Amacimiz kurumlarin guvenlik performansini veriye dayali kararlarla
          kalici olarak yukari tasimaktir.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-950">Temel Bilgiler</h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-700">
            <div>
              <dt className="text-slate-500">Sirket</dt>
              <dd className="font-medium text-slate-900">ISG360 Teknoloji A.S.</dd>
            </div>
            <div>
              <dt className="text-slate-500">Merkez</dt>
              <dd className="font-medium text-slate-900">Istanbul Teknokent, Avcilar</dd>
            </div>
            <div>
              <dt className="text-slate-500">Hizmet Modeli</dt>
              <dd className="font-medium text-slate-900">SaaS + Kuruma Ozel Kurulum</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-950">Urun Ilkeleri</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {principles.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
