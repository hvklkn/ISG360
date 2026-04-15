export const metadata = {
  title: "Guvenlik ve Uyum",
  description: "ISG360 bilgi guvenligi, erisim yonetimi ve uyumluluk yaklasimi.",
};

const controls = [
  {
    title: "Bilgi Guvenligi",
    details:
      "Veri tasima ve saklama katmanlarinda sifreleme, ortam ayrimi ve surekli izleme prensibi uygulanir.",
  },
  {
    title: "Yetkilendirme",
    details:
      "Rol bazli yetki modeli ile kullanici ve ekip seviyesinde ayrintili erisim sinirlari tanimlanir.",
  },
  {
    title: "Denetim Izi",
    details:
      "Kritik islemler zaman damgali ve kullanici baglamli olarak kaydedilir, denetim surecinde raporlanir.",
  },
  {
    title: "Surdurulebilirlik",
    details:
      "Yedekleme, kurtarma ve olay yonetimi prosedurleri ile servis devamlıligi hedeflenir.",
  },
];

export default function SecurityCompliancePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-panel backdrop-blur-xl lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Guvenlik ve Uyum</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          Kurumsal olcekte guvenli altyapi
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          ISG360, hassas saglik ve operasyon verisi yoneten kurumlarin guvenlik beklentileri icin
          katmanli bir kontrol modeliyle tasarlanmistir.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {controls.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.details}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
