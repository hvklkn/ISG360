import type { Locale } from "@/types/i18n";

export const messages = {
  tr: {
    nav_dashboard: "Panel",
    nav_companies: "Şirketler",
    nav_employees: "Çalışanlar",
    nav_trainings: "Eğitimler",
    nav_risks: "Riskler",
    nav_documents: "Dokümanlar",

    header_title: "İş Güvenliği Yönetimi",
    header_safety_user: "Güvenlik Kullanıcısı",
    header_no_email: "E-posta yok",
    header_logout: "Çıkış Yap",
    header_open_navigation: "Menüyü aç",

    language_turkish: "Türkçe",
    language_english: "İngilizce",

    sidebar_platform: "Platform",
    sidebar_close_navigation: "Menüyü kapat",
    sidebar_safety_performance: "Güvenlik Performansı",
    sidebar_safety_performance_desc:
      "Uyumluluk aksiyonlarının %92'si aktif şirketlerde planlandığı şekilde ilerliyor.",
    sidebar_need_attention: "Dikkat gerekiyor",
    sidebar_need_attention_desc:
      "Bu hafta 4 yüksek öncelikli risk için aksiyon güncellemesi bekleniyor.",

    auth_guard_title: "Oturum kontrol ediliyor",
    auth_guard_desc:
      "Kimlik doğrulama gerekliyse giriş sayfasına yönlendiriliyorsunuz.",

    home_title: "Çalışma alanı hazırlanıyor",
    home_desc: "Sizi doğru sayfaya yönlendiriyoruz.",

    login_platform: "ISG360 Platformu",
    login_title: "İş Sağlığı ve Güvenliği Yönetimi",
    login_desc:
      "Uyumluluk, risk, eğitim ve doküman süreçlerini tek bir modern panelden yönetin.",
    login_backend_api: "Backend API",
    login_backend_hint: "Backend veritabanında kayıtlı bir kullanıcı ile giriş yapın.",
    login_sign_in: "Giriş Yap",
    login_continue: "Güvenlik operasyon paneline devam edin.",
    login_email: "E-posta",
    login_password: "Şifre",
    login_email_placeholder: "ad@firma.com",
    login_password_placeholder: "Şifrenizi girin",
    login_error_email_required: "E-posta zorunludur.",
    login_error_email_invalid: "Geçerli bir e-posta adresi girin.",
    login_error_password_required: "Şifre zorunludur.",
    login_error_password_min: "Şifre en az 6 karakter olmalıdır.",
    login_error_unexpected: "Beklenmeyen giriş hatası.",
    login_signing_in: "Giriş yapılıyor...",
    login_auth_backend: "Kimlik doğrulama NestJS backend üzerinden yapılıyor.",
    login_go_home: "Ana sayfaya git",

    dashboard_eyebrow: "Güvenlik Operasyonları",
    dashboard_title: "Panel",
    dashboard_desc:
      "Şirket genelindeki uyumluluk, çalışan hazırlığı ve operasyonel riskleri tek ekrandan takip edin.",
    dashboard_export: "Raporu Dışa Aktar",
    dashboard_risk_overview_title: "Risk Durumu Özeti",
    dashboard_risk_overview_desc:
      "Takip edilen sahalardaki açık risklerin seviye dağılımı.",
    dashboard_risk_count_suffix: "risk",
    dashboard_visits_title: "Yaklaşan Saha Ziyaretleri",
    dashboard_visits_desc:
      "Önümüzdeki 7 gün içinde planlanan denetim ve incelemeler.",
    dashboard_recent_activity_title: "Son Aktiviteler",
    dashboard_recent_activity_desc:
      "Güvenlik operasyonlarınızın canlı akış özeti.",

    companies_eyebrow: "Müşteri Portföyü",
    companies_title: "Şirketler",
    companies_desc:
      "Her müşteri hesabı için iş güvenliği programlarını tek bir düzenli alandan yönetin.",
    companies_action: "Şirket Ekle",
    companies_active_title: "Aktif Şirketler",
    companies_active_desc:
      "Müşteri durumu, çalışan hacmi ve bir sonraki uyumluluk kilometre taşları.",
    companies_table_company: "Şirket",
    companies_table_sector: "Sektör",
    companies_table_employees: "Çalışan",
    companies_table_next_audit: "Sonraki Denetim",
    companies_table_status: "Durum",

    employees_eyebrow: "İşgücü",
    employees_title: "Çalışanlar",
    employees_desc:
      "İşgücü hazırlığı, sertifikalar ve sağlık takiplerini görünür tutun.",
    employees_action: "Çalışan Davet Et",
    employees_registry_title: "Çalışan Kayıtları",
    employees_registry_desc:
      "Onboarding, yetkinlik ve öncelikli takip gerektiren konuların operasyonel görünümü.",
    employees_training_label: "Eğitim",
    employees_medical_label: "Sağlık Kontrolü",

    trainings_eyebrow: "Öğrenme ve Uyum",
    trainings_title: "Eğitimler",
    trainings_desc:
      "Zorunlu güvenlik eğitimlerini, tamamlama oranlarını ve süresi dolan sertifikaları yönetin.",
    trainings_action: "Oturum Oluştur",
    trainings_participants_suffix: "katılımcı",
    trainings_completion: "Tamamlama",
    trainings_next_session: "Sonraki Oturum",

    risks_eyebrow: "Tehlike Yönetimi",
    risks_title: "Riskler",
    risks_desc:
      "Açık tehlikeleri, kalan risk maruziyetini ve düzeltici aksiyon ilerlemesini izleyin.",
    risks_action: "Risk Ekle",
    risks_open_register_title: "Açık Risk Kayıtları",
    risks_open_register_desc:
      "Tüm sahalardaki önceliklendirilmiş riskler, sorumlular ve azaltım durumu.",
    risks_owner: "Sorumlu",
    risks_review: "Gözden Geçirme",
    risks_mitigation: "Azaltım",
    risks_current_status: "Mevcut Durum",

    documents_eyebrow: "Dokümantasyon",
    documents_title: "Dokümanlar",
    documents_desc:
      "Uyumluluk dosyalarını, imzalı kayıtları ve güvenlik evraklarını tek bir alanda düzenleyin.",
    documents_action: "Dosya Yükle",

    dashboard_summary_total_companies: "Toplam Şirket",
    dashboard_summary_total_companies_helper:
      "Bu çeyrekte aktif olarak takip edilen müşteri şirketleri.",
    dashboard_summary_total_employees: "Toplam Çalışan",
    dashboard_summary_total_employees_helper:
      "İSG programları kapsamında takip edilen çalışanlar.",
    dashboard_summary_pending_trainings: "Bekleyen Eğitimler",
    dashboard_summary_pending_trainings_helper:
      "Önümüzdeki 30 günde tamamlanması gereken atamalar.",
    dashboard_summary_open_risks: "Açık Riskler",
    dashboard_summary_open_risks_helper:
      "Azaltım veya doğrulama bekleyen risk kayıtları.",

    risk_level_critical: "Kritik",
    risk_level_high: "Yüksek",
    risk_level_medium: "Orta",
    risk_level_controlled: "Kontrol Altında",

    activity_1_title: "Forklift sertifika grubu tamamlandı",
    activity_1_desc:
      "Atlas Metal'de 24 çalışan yıllık güvenlik tazeleme eğitimini tamamladı.",
    activity_2_title: "Yüksek sıcaklık riski yükseltildi",
    activity_2_desc:
      "Northwind Logistics acil azaltım taleplerini inceleme için iletti.",
    activity_3_title: "Nisan sağlık takvimi yayınlandı",
    activity_3_desc:
      "Marmara Foods hat çalışanları için güncel randevu aralıklarını paylaştı.",
    activity_4_title: "KKD uyum raporu tamamlandı",
    activity_4_desc:
      "Nova Construction bu hafta KKD denetiminde %95 tamamlama oranına ulaştı.",

    status_closed: "Kapatıldı",
    status_needs_review: "İnceleme gerekli",
    status_updated: "Güncellendi",
    status_healthy: "Sağlıklı",
    status_scheduled: "Planlandı",
    status_confirmed: "Onaylandı",
    status_pending_docs: "Evrak bekleniyor",
    status_attention: "Dikkat",
    status_critical: "Kritik",
    status_follow_up: "Takip gerekli",
    status_compliant: "Uyumlu",
    status_urgent: "Acil",
    status_running: "Devam ediyor",
    status_needs_push: "Takip gerekli",
    status_in_sync: "Senkron",
    status_restricted: "Kısıtlı",

    time_10m_ago: "10 dk önce",
    time_47m_ago: "47 dk önce",
    time_2h_ago: "2 saat önce",
    time_4h_ago: "4 saat önce",

    sector_manufacturing: "Üretim",
    sector_logistics: "Lojistik",
    sector_food_production: "Gıda Üretimi",
    sector_construction: "İnşaat",

    employee_stat_active_workforce: "Aktif İşgücü",
    employee_stat_active_workforce_helper:
      "Takip edilen sahalara atanmış çalışanlar.",
    employee_stat_expiring_certificates: "Süresi Dolacak Sertifikalar",
    employee_stat_expiring_certificates_helper:
      "30 gün içinde süresi dolacak sertifikalar.",
    employee_stat_pending_medicals: "Bekleyen Sağlık Kontrolleri",
    employee_stat_pending_medicals_helper:
      "Bu hafta takip gerektiren sağlık kontrolleri.",

    employee_role_field_technician: "Saha Teknisyeni",
    employee_role_warehouse_supervisor: "Depo Sorumlusu",
    employee_role_machine_operator: "Makine Operatörü",
    employee_role_quality_specialist: "Kalite Uzmanı",

    employee_training_working_height_valid: "Yüksekte Çalışma · Geçerli",
    employee_training_forklift_completed: "Forklift Güvenliği · Tamamlandı",
    employee_training_hazard_missing: "Tehlike İletişimi · Eksik",
    employee_training_fire_completed: "Yangın Müdahalesi · Tamamlandı",

    employee_medical_due_12_days: "12 gün içinde",
    employee_medical_completed_02_apr_2026: "02 Nis 2026 tamamlandı",
    employee_medical_due_5_days: "5 gün içinde",
    employee_medical_completed_10_mar_2026: "10 Mar 2026 tamamlandı",

    training_emergency_response_name: "Acil Durum Müdahalesi",
    training_emergency_response_summary:
      "Tahliye, alarm ve müdahale hazırlığı için yıllık tazeleme programı.",
    training_ppe_awareness_name: "KKD Farkındalığı",
    training_ppe_awareness_summary:
      "Aktif sahalarda doğru ekipman kullanımı için standart eğitim.",
    training_working_height_name: "Yüksekte Çalışma",
    training_working_height_summary:
      "Yüksek riskli inşaat bölgelerinde çalışanlar için özel eğitim.",

    risk_1_title: "Paketleme hattında kimyasal maruziyet",
    risk_1_mitigation:
      "Operatörler için havalandırma iyileştirmeleri ve KKD güçlendirmesi uygulanıyor.",
    risk_1_status: "Mühendislik güncellemesi sonrası son kontrol doğrulaması bekleniyor.",
    risk_2_title: "Forklift-yaya etkileşimi",
    risk_2_mitigation:
      "Trafik şeritleri yenileniyor, ramak kala raporlaması yoğunlaştırıldı.",
    risk_2_status:
      "Sorumlu eğitimleri tamamlandı, fiziksel güzergah ayrımı devam ediyor.",
    risk_3_title: "Pres ünitesinde gürültü maruziyeti",
    risk_3_mitigation:
      "Akustik bariyerler kuruldu, periyodik ölçüm aylık plana alındı.",
    risk_3_status:
      "İzleme sürüyor, kalan risk kabul edilebilir eşiklerde seyrediyor.",

    document_group_risk_assessment_title: "Risk Değerlendirme Dosyaları",
    document_group_risk_assessment_desc:
      "Güncel değerlendirmeler, kalan risk incelemeleri ve imzalı saha onayları.",
    document_group_training_records_title: "Eğitim Kayıtları",
    document_group_training_records_desc:
      "Yoklama formları, sertifikalar ve dijital tamamlama kayıtları.",
    document_group_medical_reports_title: "Sağlık Raporları",
    document_group_medical_reports_desc:
      "İşyeri hekimi raporları ve randevu sonuçları için güvenli arşiv.",
  },
  en: {
    nav_dashboard: "Dashboard",
    nav_companies: "Companies",
    nav_employees: "Employees",
    nav_trainings: "Trainings",
    nav_risks: "Risks",
    nav_documents: "Documents",

    header_title: "Occupational Safety Admin",
    header_safety_user: "Safety User",
    header_no_email: "No email",
    header_logout: "Logout",
    header_open_navigation: "Open navigation",

    language_turkish: "Turkish",
    language_english: "English",

    sidebar_platform: "Platform",
    sidebar_close_navigation: "Close navigation",
    sidebar_safety_performance: "Safety Performance",
    sidebar_safety_performance_desc:
      "92% of compliance actions are currently on track across active companies.",
    sidebar_need_attention: "Need attention",
    sidebar_need_attention_desc:
      "4 high-priority risks require mitigation updates this week.",

    auth_guard_title: "Checking session",
    auth_guard_desc:
      "Redirecting to login if authentication is required.",

    home_title: "Preparing workspace",
    home_desc: "Redirecting you to the right page.",

    login_platform: "ISG360 Platform",
    login_title: "Occupational Health and Safety Management",
    login_desc:
      "Manage compliance, risks, training, and documentation in a single modern admin panel.",
    login_backend_api: "Backend API",
    login_backend_hint: "Sign in with a user registered in the backend database.",
    login_sign_in: "Sign In",
    login_continue: "Continue to the safety operations dashboard.",
    login_email: "Email",
    login_password: "Password",
    login_email_placeholder: "name@company.com",
    login_password_placeholder: "Enter your password",
    login_error_email_required: "Email is required.",
    login_error_email_invalid: "Enter a valid email address.",
    login_error_password_required: "Password is required.",
    login_error_password_min: "Password must be at least 6 characters.",
    login_error_unexpected: "Unexpected login error.",
    login_signing_in: "Signing in...",
    login_auth_backend: "Authentication is now handled by the NestJS backend.",
    login_go_home: "Go to home",

    dashboard_eyebrow: "Safety Operations",
    dashboard_title: "Dashboard",
    dashboard_desc:
      "Track company-wide compliance, workforce readiness, and operational risks from one place.",
    dashboard_export: "Export Report",
    dashboard_risk_overview_title: "Risk Status Overview",
    dashboard_risk_overview_desc:
      "Current open risks by severity level across monitored sites.",
    dashboard_risk_count_suffix: "risks",
    dashboard_visits_title: "Upcoming Site Visits",
    dashboard_visits_desc:
      "Inspections and audits scheduled in the next 7 days.",
    dashboard_recent_activity_title: "Recent Activity",
    dashboard_recent_activity_desc:
      "A live pulse of events across your safety operations.",

    companies_eyebrow: "Client Portfolio",
    companies_title: "Companies",
    companies_desc:
      "Manage occupational safety programs for every client account in one organized workspace.",
    companies_action: "Add Company",
    companies_active_title: "Active Companies",
    companies_active_desc:
      "Overview of client health, employee volume, and next compliance milestones.",
    companies_table_company: "Company",
    companies_table_sector: "Sector",
    companies_table_employees: "Employees",
    companies_table_next_audit: "Next Audit",
    companies_table_status: "Status",

    employees_eyebrow: "Workforce",
    employees_title: "Employees",
    employees_desc:
      "Keep visibility on workforce readiness, certifications, and medical follow-ups.",
    employees_action: "Invite Employee",
    employees_registry_title: "Employee Registry",
    employees_registry_desc:
      "Operational view of onboarding, qualification, and high-priority follow-up items.",
    employees_training_label: "Training",
    employees_medical_label: "Medical Check",

    trainings_eyebrow: "Learning & Compliance",
    trainings_title: "Trainings",
    trainings_desc:
      "Coordinate mandatory safety education, completion rates, and expiring certifications.",
    trainings_action: "Create Session",
    trainings_participants_suffix: "participants",
    trainings_completion: "Completion",
    trainings_next_session: "Next Session",

    risks_eyebrow: "Hazard Management",
    risks_title: "Risks",
    risks_desc:
      "Monitor open hazards, residual risk exposure, and corrective action progress.",
    risks_action: "Log Risk",
    risks_open_register_title: "Open Risk Register",
    risks_open_register_desc:
      "Prioritized hazards across all sites, with ownership and mitigation status.",
    risks_owner: "Owner",
    risks_review: "Review",
    risks_mitigation: "Mitigation",
    risks_current_status: "Current Status",

    documents_eyebrow: "Documentation",
    documents_title: "Documents",
    documents_desc:
      "Organize compliance files, signed records, and safety documentation in one searchable workspace.",
    documents_action: "Upload File",

    dashboard_summary_total_companies: "Total Companies",
    dashboard_summary_total_companies_helper:
      "Actively monitored client companies this quarter.",
    dashboard_summary_total_employees: "Total Employees",
    dashboard_summary_total_employees_helper:
      "Employees currently covered by OHS programs.",
    dashboard_summary_pending_trainings: "Pending Trainings",
    dashboard_summary_pending_trainings_helper:
      "Assignments due in the next 30 days.",
    dashboard_summary_open_risks: "Open Risks",
    dashboard_summary_open_risks_helper:
      "Risks awaiting mitigation or verification.",

    risk_level_critical: "Critical",
    risk_level_high: "High",
    risk_level_medium: "Medium",
    risk_level_controlled: "Controlled",

    activity_1_title: "Forklift certification batch completed",
    activity_1_desc:
      "24 workers at Atlas Metal passed annual safety refresh training.",
    activity_2_title: "High-temperature hazard escalated",
    activity_2_desc:
      "Northwind Logistics submitted urgent mitigation requests for review.",
    activity_3_title: "April medical schedule published",
    activity_3_desc:
      "Marmara Foods shared updated appointment slots for line workers.",
    activity_4_title: "PPE compliance report finalized",
    activity_4_desc:
      "Nova Construction reached 95% PPE audit completion this week.",

    status_closed: "Closed",
    status_needs_review: "Needs review",
    status_updated: "Updated",
    status_healthy: "Healthy",
    status_scheduled: "Scheduled",
    status_confirmed: "Confirmed",
    status_pending_docs: "Pending Docs",
    status_attention: "Attention",
    status_critical: "Critical",
    status_follow_up: "Follow-up",
    status_compliant: "Compliant",
    status_urgent: "Urgent",
    status_running: "Running",
    status_needs_push: "Needs push",
    status_in_sync: "In sync",
    status_restricted: "Restricted",

    time_10m_ago: "10 min ago",
    time_47m_ago: "47 min ago",
    time_2h_ago: "2 hours ago",
    time_4h_ago: "4 hours ago",

    sector_manufacturing: "Manufacturing",
    sector_logistics: "Logistics",
    sector_food_production: "Food Production",
    sector_construction: "Construction",

    employee_stat_active_workforce: "Active Workforce",
    employee_stat_active_workforce_helper:
      "Employees assigned to monitored worksites.",
    employee_stat_expiring_certificates: "Expiring Certificates",
    employee_stat_expiring_certificates_helper:
      "Certificates expiring within 30 days.",
    employee_stat_pending_medicals: "Pending Medicals",
    employee_stat_pending_medicals_helper:
      "Medical checks requiring follow-up this week.",

    employee_role_field_technician: "Field Technician",
    employee_role_warehouse_supervisor: "Warehouse Supervisor",
    employee_role_machine_operator: "Machine Operator",
    employee_role_quality_specialist: "Quality Specialist",

    employee_training_working_height_valid: "Working at Height · Valid",
    employee_training_forklift_completed: "Forklift Safety · Completed",
    employee_training_hazard_missing: "Hazard Communication · Missing",
    employee_training_fire_completed: "Fire Response · Completed",

    employee_medical_due_12_days: "Due in 12 days",
    employee_medical_completed_02_apr_2026: "Completed 02 Apr 2026",
    employee_medical_due_5_days: "Due in 5 days",
    employee_medical_completed_10_mar_2026: "Completed 10 Mar 2026",

    training_emergency_response_name: "Emergency Response",
    training_emergency_response_summary:
      "Annual refresh program for evacuation, alarm, and intervention readiness.",
    training_ppe_awareness_name: "PPE Awareness",
    training_ppe_awareness_summary:
      "Standardized instruction for proper equipment usage across all active sites.",
    training_working_height_name: "Working at Height",
    training_working_height_summary:
      "High-risk operations course for site workers and contractors in construction zones.",

    risk_1_title: "Chemical exposure in packaging line",
    risk_1_mitigation:
      "Ventilation improvements and PPE reinforcement are being rolled out for operators.",
    risk_1_status: "Awaiting final control validation after the engineering update.",
    risk_2_title: "Forklift-pedestrian interaction",
    risk_2_mitigation:
      "Traffic lanes are being repainted and near-miss reporting has been intensified.",
    risk_2_status:
      "Supervisor training completed, physical route separation still in progress.",
    risk_3_title: "Noise exposure at stamping unit",
    risk_3_mitigation:
      "Acoustic shields were installed and periodic measurement is now scheduled monthly.",
    risk_3_status:
      "Monitoring continues, residual risk remains within acceptable thresholds.",

    document_group_risk_assessment_title: "Risk Assessment Files",
    document_group_risk_assessment_desc:
      "Current evaluations, residual risk reviews, and signed site approvals.",
    document_group_training_records_title: "Training Records",
    document_group_training_records_desc:
      "Attendance sheets, certificates, and digital completion records.",
    document_group_medical_reports_title: "Medical Reports",
    document_group_medical_reports_desc:
      "Secure archive for occupational physician reports and appointment outcomes.",
  },
} as const;

export type TranslationKey = keyof (typeof messages)["tr"];

export function getMessage(locale: Locale, key: TranslationKey) {
  return messages[locale][key] ?? messages.en[key];
}

