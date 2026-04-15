export const navigationItems = [
  { labelKey: "nav_dashboard", href: "/dashboard", icon: "dashboard" },
  { labelKey: "nav_companies", href: "/companies", icon: "companies" },
  { labelKey: "nav_employees", href: "/employees", icon: "employees" },
  { labelKey: "nav_trainings", href: "/trainings", icon: "trainings" },
  { labelKey: "nav_risks", href: "/risks", icon: "risks" },
  { labelKey: "nav_documents", href: "/documents", icon: "documents" },
] as const;

export const dashboardSummaryCards = [
  {
    labelKey: "dashboard_summary_total_companies",
    value: "48",
    trend: "+12%",
    helperKey: "dashboard_summary_total_companies_helper",
  },
  {
    labelKey: "dashboard_summary_total_employees",
    value: "3,860",
    trend: "+8%",
    helperKey: "dashboard_summary_total_employees_helper",
  },
  {
    labelKey: "dashboard_summary_pending_trainings",
    value: "137",
    trend: "-6%",
    helperKey: "dashboard_summary_pending_trainings_helper",
  },
  {
    labelKey: "dashboard_summary_open_risks",
    value: "27",
    trend: "-9%",
    helperKey: "dashboard_summary_open_risks_helper",
  },
] as const;

export const riskStatusOverview = [
  { labelKey: "risk_level_critical", count: 4, percent: 15, tone: "danger" },
  { labelKey: "risk_level_high", count: 8, percent: 30, tone: "warning" },
  { labelKey: "risk_level_medium", count: 10, percent: 37, tone: "info" },
  { labelKey: "risk_level_controlled", count: 5, percent: 18, tone: "success" },
] as const;

export const recentActivity = [
  {
    titleKey: "activity_1_title",
    descriptionKey: "activity_1_desc",
    statusKey: "status_closed",
    tone: "success",
    timeKey: "time_10m_ago",
  },
  {
    titleKey: "activity_2_title",
    descriptionKey: "activity_2_desc",
    statusKey: "status_needs_review",
    tone: "danger",
    timeKey: "time_47m_ago",
  },
  {
    titleKey: "activity_3_title",
    descriptionKey: "activity_3_desc",
    statusKey: "status_updated",
    tone: "info",
    timeKey: "time_2h_ago",
  },
  {
    titleKey: "activity_4_title",
    descriptionKey: "activity_4_desc",
    statusKey: "status_healthy",
    tone: "success",
    timeKey: "time_4h_ago",
  },
] as const;

export const upcomingVisits = [
  {
    company: "Atlas Metal",
    location: "Kocaeli Plant 2",
    date: "14 Apr 2026 · 10:00",
    statusKey: "status_scheduled",
    tone: "info",
  },
  {
    company: "Northwind Logistics",
    location: "Gebze Warehouse",
    date: "16 Apr 2026 · 13:30",
    statusKey: "status_confirmed",
    tone: "success",
  },
  {
    company: "Marmara Foods",
    location: "Bursa Production Site",
    date: "18 Apr 2026 · 09:00",
    statusKey: "status_pending_docs",
    tone: "warning",
  },
] as const;

export const companies = [
  {
    name: "Atlas Metal",
    contact: "contact@atlasmetal.com",
    sectorKey: "sector_manufacturing",
    employees: 540,
    auditDate: "22 Apr 2026",
    statusKey: "status_healthy",
    tone: "success",
  },
  {
    name: "Northwind Logistics",
    contact: "ops@northwindlogistics.com",
    sectorKey: "sector_logistics",
    employees: 420,
    auditDate: "19 Apr 2026",
    statusKey: "status_attention",
    tone: "warning",
  },
  {
    name: "Marmara Foods",
    contact: "safety@marmarafoods.com",
    sectorKey: "sector_food_production",
    employees: 690,
    auditDate: "28 Apr 2026",
    statusKey: "status_critical",
    tone: "danger",
  },
  {
    name: "Nova Construction",
    contact: "admin@novaconstruction.com",
    sectorKey: "sector_construction",
    employees: 315,
    auditDate: "25 Apr 2026",
    statusKey: "status_healthy",
    tone: "success",
  },
] as const;

export const employeeStats = [
  {
    labelKey: "employee_stat_active_workforce",
    value: "3,860",
    helperKey: "employee_stat_active_workforce_helper",
  },
  {
    labelKey: "employee_stat_expiring_certificates",
    value: "64",
    helperKey: "employee_stat_expiring_certificates_helper",
  },
  {
    labelKey: "employee_stat_pending_medicals",
    value: "29",
    helperKey: "employee_stat_pending_medicals_helper",
  },
] as const;

export const employees = [
  {
    name: "Mert Yildiz",
    roleKey: "employee_role_field_technician",
    company: "Nova Construction",
    trainingKey: "employee_training_working_height_valid",
    medicalKey: "employee_medical_due_12_days",
    statusKey: "status_follow_up",
    tone: "warning",
  },
  {
    name: "Selin Arslan",
    roleKey: "employee_role_warehouse_supervisor",
    company: "Northwind Logistics",
    trainingKey: "employee_training_forklift_completed",
    medicalKey: "employee_medical_completed_02_apr_2026",
    statusKey: "status_compliant",
    tone: "success",
  },
  {
    name: "Kerem Aksoy",
    roleKey: "employee_role_machine_operator",
    company: "Atlas Metal",
    trainingKey: "employee_training_hazard_missing",
    medicalKey: "employee_medical_due_5_days",
    statusKey: "status_urgent",
    tone: "danger",
  },
  {
    name: "Ece Kiran",
    roleKey: "employee_role_quality_specialist",
    company: "Marmara Foods",
    trainingKey: "employee_training_fire_completed",
    medicalKey: "employee_medical_completed_10_mar_2026",
    statusKey: "status_compliant",
    tone: "success",
  },
] as const;

export const trainingPrograms = [
  {
    nameKey: "training_emergency_response_name",
    summaryKey: "training_emergency_response_summary",
    participants: 160,
    progress: 87,
    nextSession: "15 Apr 2026 · Online + On-site",
    statusKey: "status_running",
    tone: "info",
  },
  {
    nameKey: "training_ppe_awareness_name",
    summaryKey: "training_ppe_awareness_summary",
    participants: 240,
    progress: 94,
    nextSession: "17 Apr 2026 · Atlas Metal",
    statusKey: "status_healthy",
    tone: "success",
  },
  {
    nameKey: "training_working_height_name",
    summaryKey: "training_working_height_summary",
    participants: 72,
    progress: 61,
    nextSession: "19 Apr 2026 · Nova Construction",
    statusKey: "status_needs_push",
    tone: "warning",
  },
] as const;

export const riskMatrix = [
  {
    titleKey: "risk_1_title",
    levelKey: "risk_level_high",
    tone: "danger",
    site: "Marmara Foods · Line B",
    owner: "Ayse T.",
    reviewDate: "16 Apr 2026",
    mitigationKey: "risk_1_mitigation",
    statusKey: "risk_1_status",
  },
  {
    titleKey: "risk_2_title",
    levelKey: "risk_level_medium",
    tone: "warning",
    site: "Northwind Logistics · Warehouse A",
    owner: "Baris K.",
    reviewDate: "18 Apr 2026",
    mitigationKey: "risk_2_mitigation",
    statusKey: "risk_2_status",
  },
  {
    titleKey: "risk_3_title",
    levelKey: "risk_level_controlled",
    tone: "success",
    site: "Atlas Metal · Stamping Floor",
    owner: "Derya G.",
    reviewDate: "21 Apr 2026",
    mitigationKey: "risk_3_mitigation",
    statusKey: "risk_3_status",
  },
] as const;

export const documentGroups = [
  {
    titleKey: "document_group_risk_assessment_title",
    count: "124 documents",
    statusKey: "status_updated",
    tone: "success",
    descriptionKey: "document_group_risk_assessment_desc",
  },
  {
    titleKey: "document_group_training_records_title",
    count: "318 documents",
    statusKey: "status_in_sync",
    tone: "info",
    descriptionKey: "document_group_training_records_desc",
  },
  {
    titleKey: "document_group_medical_reports_title",
    count: "89 documents",
    statusKey: "status_restricted",
    tone: "warning",
    descriptionKey: "document_group_medical_reports_desc",
  },
] as const;
