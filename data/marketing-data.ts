export type ModuleSummary = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  forSegments: string[];
};

export type SectorProfile = {
  slug: string;
  name: string;
  summary: string;
  priorities: string[];
  recommendedModules: string[];
};

export const moduleSummaries: ModuleSummary[] = [
  {
    slug: "akilli-risk",
    title: "Akilli Risk",
    subtitle: "Yapay zeka destekli risk analizi",
    description:
      "Saha bulgularini puanlayan, onceliklendiren ve aksiyon onerileri ureten modern risk yonetimi modulu.",
    highlights: [
      "Fine-Kinney ve matris skorlamasi",
      "Ramak kala ve Dof akis yonetimi",
      "Saha fotografindan risk siniflandirma yardimi",
    ],
    forSegments: ["OSGB", "Kobi-Kamu", "Buyuk Kurumlar"],
  },
  {
    slug: "egitim-ve-sertifika",
    title: "Egitim ve Sertifika",
    subtitle: "Uc uca dijital egitim operasyonu",
    description:
      "Planlama, online icerik, sinav, sertifika ve gecerlilik takibini tek panelde birlestirir.",
    highlights: [
      "Yillik plan ve atama otomasyonu",
      "Online sinav ve basari raporlari",
      "Suresi dolan sertifikalar icin erken uyari",
    ],
    forSegments: ["OSGB", "Kobi-Kamu", "Bireysel Uzman"],
  },
  {
    slug: "dokuman-ve-imza",
    title: "Dokuman ve Imza",
    subtitle: "Yasal evraklari guvenle yonetin",
    description:
      "Politika, talimat, tutanak ve rapor sureclerini imza adimlari ile birlikte tek merkezde tutar.",
    highlights: [
      "Versiyonlanmis dokuman arsivi",
      "Yetki bazli erisim ve denetim izi",
      "Uzaktan imza akislari",
    ],
    forSegments: ["OSGB", "Kobi-Kamu", "Saglik Birimleri"],
  },
  {
    slug: "calisan-self-servis",
    title: "Calisan Self Servis",
    subtitle: "Calisani surece aktif dahil edin",
    description:
      "Calisanlarin egitim, muayene, KKD ve gorev bildirimlerini kendi panelinden takip etmesini saglar.",
    highlights: [
      "Mobil uyumlu calisan paneli",
      "Anlik bildirim ve hatirlatmalar",
      "Talep ve geri bildirim toplama",
    ],
    forSegments: ["Kobi-Kamu", "Buyuk Kurumlar"],
  },
  {
    slug: "osgb-operasyon",
    title: "OSGB Operasyon",
    subtitle: "Coklu firma yonetimi icin merkez panel",
    description:
      "Firmalari, uzmanlari, hekimleri, planlari ve raporlari tek operasyon merkezinde olceklendirir.",
    highlights: [
      "Coklu musteri ve lokasyon yonetimi",
      "Uzman ve hekim gorev planlama",
      "Yonetici icin gercek zamanli KPI panosu",
    ],
    forSegments: ["OSGB", "Kurumsal Danismanlik"],
  },
  {
    slug: "entegrasyon-merkezi",
    title: "Entegrasyon Merkezi",
    subtitle: "Resmi sistemler ve kurumsal altyapi ile uyum",
    description:
      "IBYS, ISBS, kurum ici ERP ve kimlik yonetimi sistemleri ile guvenli veri akisi kurar.",
    highlights: [
      "Bakanlik uyumluluk akislari",
      "API-first entegrasyon mimarisi",
      "Denetlenebilir veri gecmisi",
    ],
    forSegments: ["OSGB", "Kamu", "Buyuk Kurumlar"],
  },
];

export const sectorProfiles: SectorProfile[] = [
  {
    slug: "kobi-kamu",
    name: "Kobi-Kamu",
    summary:
      "Sinirli ekiplerle mevzuat uyumunu surdurmek isteyen kurumlar icin sade ama guclu operasyon akisi.",
    priorities: [
      "Merkezi gorev ve takvim yonetimi",
      "Denetime hazir raporlama altyapisi",
      "Hizli onboarding ve dusuk egitim maliyeti",
    ],
    recommendedModules: ["akilli-risk", "egitim-ve-sertifika", "dokuman-ve-imza"],
  },
  {
    slug: "osgb",
    name: "OSGB",
    summary:
      "Coklu firmaya hizmet veren ekipler icin planlama, ekip koordinasyonu ve olceklenebilir hizmet yonetimi.",
    priorities: [
      "Firma bazli servis kalitesi takibi",
      "Uzman ve hekim kapasite planlama",
      "Standartlastirilmis hizmet ciktilari",
    ],
    recommendedModules: ["osgb-operasyon", "akilli-risk", "entegrasyon-merkezi"],
  },
  {
    slug: "bireysel",
    name: "Bireysel Uzman",
    summary:
      "Tek basina calisan isg uzmani veya isyeri hekimi icin hizli kurulumlu, maliyet etkin is akisi.",
    priorities: [
      "Sade ekranlarla hizli is tamamlama",
      "Yasal kayitlari eksiksiz tutma",
      "Mobil erisimle sahada sureklilik",
    ],
    recommendedModules: ["egitim-ve-sertifika", "dokuman-ve-imza", "akilli-risk"],
  },
];

export const trustStatements = [
  "ISO/IEC 27001 odakli guvenlik yaklasimi",
  "Mevzuat uyumlu operasyon tasarimi",
  "Rol bazli yetkilendirme ve denetim izi",
  "Bulut veya kurum ici kurulum esnekligi",
];

export const blogPosts = [
  {
    slug: "isgde-olgunluk-modeli",
    title: "ISG operasyonlarinda olgunluk modeli nasil kurulur?",
    excerpt:
      "Ekipler buyurken surec standardini korumak icin 90 gunluk pratik bir olgunlasma plani.",
    date: "14 Nisan 2026",
    category: "Operasyon",
  },
  {
    slug: "risk-onceliklendirme-cercevesi",
    title: "Risk onceliklendirmeyi dogru yapan 5 veri sinyali",
    excerpt:
      "Saha yogunlugunda giden ekipler icin eylem onceligini netlestiren olculebilir yaklasim.",
    date: "09 Nisan 2026",
    category: "Risk",
  },
  {
    slug: "egitimde-tamamlama-orani",
    title: "Egitim tamamlama oranini artiran urun desenleri",
    excerpt:
      "Bildirim, mikro-icerik ve yonetici paneli kombinasyonuyla tamamlamayi yukari tasima rehberi.",
    date: "03 Nisan 2026",
    category: "Egitim",
  },
];

export const marketingNavigation = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/cozumler", label: "Cozumler" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/guvenlik-uyumluluk", label: "Guvenlik" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "Iletisim" },
] as const;

export function getModuleBySlug(slug: string) {
  return moduleSummaries.find((item) => item.slug === slug);
}

export function getSectorBySlug(slug: string) {
  return sectorProfiles.find((item) => item.slug === slug);
}
