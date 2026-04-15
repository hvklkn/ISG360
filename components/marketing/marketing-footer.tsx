import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">ISG360</p>
          <h2 className="font-heading mt-3 text-2xl font-semibold text-slate-950">
            Guvenli, denetlenebilir ve olceklenebilir isg operasyonu.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Risk, egitim, dokuman ve saha operasyonlarinizi tek platformda yonetin.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Hizli Erisim</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            <Link href="/cozumler" className="transition hover:text-slate-950">
              Cozumler
            </Link>
            <Link href="/kurumsal" className="transition hover:text-slate-950">
              Kurumsal
            </Link>
            <Link href="/guvenlik-uyumluluk" className="transition hover:text-slate-950">
              Guvenlik ve Uyum
            </Link>
            <Link href="/iletisim" className="transition hover:text-slate-950">
              Iletisim
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Iletisim</p>
          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <p>Istanbul Teknokent, Avcilar / Istanbul</p>
            <p>+90 (212) 000 00 00</p>
            <p>hello@isg360.com</p>
            <p>Pzt-Cuma: 09:00 - 18:00</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        © 2026 ISG360. Tum haklari saklidir.
      </div>
    </footer>
  );
}
