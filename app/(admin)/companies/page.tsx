"use client";

import { useEffect, useMemo, useState } from "react";

import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { useAuth } from "@/hooks/use-auth";
import { useI18n } from "@/hooks/use-i18n";
import { apiGet, apiPost } from "@/lib/api/client";

type CompanySector = "MANUFACTURING" | "LOGISTICS" | "FOOD_PRODUCTION" | "CONSTRUCTION";
type CompanyStatus = "HEALTHY" | "ATTENTION" | "CRITICAL";
type SectorKey =
  | "sector_manufacturing"
  | "sector_logistics"
  | "sector_food_production"
  | "sector_construction";
type StatusKey = "status_healthy" | "status_attention" | "status_critical";
type StatusTone = "success" | "warning" | "danger";

type CompanyApi = {
  id: number;
  name: string;
  email: string | null;
  sector: CompanySector;
  employeeCount: number;
  nextAuditAt: string | null;
  status: CompanyStatus;
};

type CompanyRow = {
  id: number;
  name: string;
  contact: string;
  sectorKey: SectorKey;
  employees: number;
  auditDate: string;
  statusKey: StatusKey;
  tone: StatusTone;
};

export default function CompaniesPage() {
  const { t, locale } = useI18n();
  const { token } = useAuth();
  const [companyList, setCompanyList] = useState<CompanyApi[]>([]);
  const [isLoadingCompanies, setIsLoadingCompanies] = useState(false);

  const companyRows = useMemo(
    () => companyList.map((company) => mapCompanyToRow(company, locale)),
    [companyList, locale],
  );

  useEffect(() => {
    if (!token) {
      setCompanyList([]);
      return;
    }

    let isActive = true;

    const loadCompanies = async () => {
      setIsLoadingCompanies(true);
      try {
        const response = await apiGet<CompanyApi[]>("/companies", { token });
        if (!isActive) return;
        setCompanyList(response);
      } catch (error) {
        if (isActive) {
          window.alert(error instanceof Error ? error.message : "Sirket listesi alinamadi.");
        }
      } finally {
        if (isActive) {
          setIsLoadingCompanies(false);
        }
      }
    };

    void loadCompanies();

    return () => {
      isActive = false;
    };
  }, [token]);

  const handleAddCompany = async () => {
    const name = window.prompt("Sirket adi:");
    if (!name?.trim()) return;

    const sectorInput = window.prompt(
      "Sektor secin: 1-Uretim, 2-Lojistik, 3-Gida Uretimi, 4-Insaat",
      "1",
    );
    if (!sectorInput?.trim()) return;

    const sectorMap: Record<string, CompanySector> = {
      "1": "MANUFACTURING",
      "2": "LOGISTICS",
      "3": "FOOD_PRODUCTION",
      "4": "CONSTRUCTION",
      uretim: "MANUFACTURING",
      lojistik: "LOGISTICS",
      gida: "FOOD_PRODUCTION",
      insaat: "CONSTRUCTION",
    };
    const sector = sectorMap[sectorInput.trim().toLowerCase()];
    if (!sector) {
      window.alert("Gecerli bir sektor girin.");
      return;
    }

    const employeesInput = window.prompt("Calisan sayisi:", "0");
    const employees = Number.parseInt(employeesInput ?? "", 10);
    if (!Number.isInteger(employees) || employees < 0) {
      window.alert("Gecerli bir calisan sayisi girin.");
      return;
    }

    const auditDateInput = window.prompt("Sonraki denetim tarihi (YYYY-MM-DD):", "2026-04-22");
    if (!auditDateInput?.trim()) return;

    const normalizedAuditDate = new Date(`${auditDateInput.trim()}T00:00:00.000Z`);
    if (Number.isNaN(normalizedAuditDate.getTime())) {
      window.alert("Gecerli bir tarih girin. Ornek: 2026-04-22");
      return;
    }

    const statusInput = window.prompt("Durum secin: 1-Saglikli, 2-Dikkat, 3-Kritik", "1");
    if (!statusInput?.trim()) return;

    const statusMap: Record<string, CompanyStatus> = {
      "1": "HEALTHY",
      "2": "ATTENTION",
      "3": "CRITICAL",
      saglikli: "HEALTHY",
      dikkat: "ATTENTION",
      kritik: "CRITICAL",
    };
    const status = statusMap[statusInput.trim().toLowerCase()];
    if (!status) {
      window.alert("Gecerli bir durum girin.");
      return;
    }

    if (!token) {
      window.alert("Oturum bulunamadi. Lutfen tekrar giris yapin.");
      return;
    }

    try {
      const createdCompany = await apiPost<CompanyApi>(
        "/companies",
        {
          name: name.trim(),
          sector,
          employeeCount: employees,
          nextAuditAt: normalizedAuditDate.toISOString(),
          status,
        },
        { token },
      );

      setCompanyList((prev) => [createdCompany, ...prev]);

      window.alert("Sirket basariyla eklendi.");
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Sirket eklenemedi.");
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={t("companies_eyebrow")}
        title={t("companies_title")}
        description={t("companies_desc")}
        actionLabel={t("companies_action")}
        onAction={() => {
          void handleAddCompany();
        }}
      />

      <SectionCard
        title={t("companies_active_title")}
        description={t("companies_active_desc")}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.22em] text-slate-400">
                <th className="px-4">{t("companies_table_company")}</th>
                <th className="px-4">{t("companies_table_sector")}</th>
                <th className="px-4">{t("companies_table_employees")}</th>
                <th className="px-4">{t("companies_table_next_audit")}</th>
                <th className="px-4">{t("companies_table_status")}</th>
              </tr>
            </thead>
            <tbody>
              {companyRows.map((company) => (
                <tr key={company.id} className="rounded-2xl bg-slate-50/70 text-sm text-slate-600">
                  <td className="rounded-l-2xl px-4 py-4">
                    <div>
                      <p className="font-semibold text-slate-900">{company.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{company.contact}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">{t(company.sectorKey)}</td>
                  <td className="px-4 py-4">{company.employees}</td>
                  <td className="px-4 py-4">{company.auditDate}</td>
                  <td className="rounded-r-2xl px-4 py-4">
                    <StatusBadge tone={company.tone}>{t(company.statusKey)}</StatusBadge>
                  </td>
                </tr>
              ))}
              {!isLoadingCompanies && companyRows.length === 0 ? (
                <tr className="rounded-2xl bg-slate-50/70 text-sm text-slate-500">
                  <td className="rounded-2xl px-4 py-6" colSpan={5}>
                    {locale === "tr" ? "Henüz şirket kaydı yok." : "No companies yet."}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function mapCompanyToRow(company: CompanyApi, locale: "tr" | "en"): CompanyRow {
  const sectorMap: Record<CompanySector, SectorKey> = {
    MANUFACTURING: "sector_manufacturing",
    LOGISTICS: "sector_logistics",
    FOOD_PRODUCTION: "sector_food_production",
    CONSTRUCTION: "sector_construction",
  };

  const statusMap: Record<CompanyStatus, { statusKey: StatusKey; tone: StatusTone }> = {
    HEALTHY: { statusKey: "status_healthy", tone: "success" },
    ATTENTION: { statusKey: "status_attention", tone: "warning" },
    CRITICAL: { statusKey: "status_critical", tone: "danger" },
  };

  const statusConfig = statusMap[company.status];

  return {
    id: company.id,
    name: company.name,
    contact: company.email ?? "-",
    sectorKey: sectorMap[company.sector],
    employees: company.employeeCount,
    auditDate: formatAuditDate(company.nextAuditAt, locale),
    statusKey: statusConfig.statusKey,
    tone: statusConfig.tone,
  };
}

function formatAuditDate(value: string | null, locale: "tr" | "en") {
  if (!value) return "-";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsed);
}
