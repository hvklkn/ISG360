"use client";

import { useState } from "react";

import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { employeeStats, employees } from "@/data/mock-data";
import { apiPost } from "@/lib/api/client";
import { useAuth } from "@/hooks/use-auth";
import { useI18n } from "@/hooks/use-i18n";

type EmployeeRow = {
  name: string;
  roleKey: (typeof employees)[number]["roleKey"];
  company: string;
  trainingKey: (typeof employees)[number]["trainingKey"];
  medicalKey: (typeof employees)[number]["medicalKey"];
  statusKey: (typeof employees)[number]["statusKey"];
  tone: (typeof employees)[number]["tone"];
};

export default function EmployeesPage() {
  const { t } = useI18n();
  const { token } = useAuth();
  const [employeeRows, setEmployeeRows] = useState<EmployeeRow[]>(
    employees.map((item) => ({ ...item })),
  );

  const handleInviteEmployee = async () => {
    const fullName = window.prompt("Calisan adi soyadi:");
    if (!fullName?.trim()) return;

    const companyIdInput = window.prompt("Sirket ID (or. 1):", "1");
    const companyId = Number(companyIdInput);
    if (!Number.isInteger(companyId) || companyId <= 0) {
      window.alert("Gecerli bir sirket ID girin.");
      return;
    }

    const companyName = window.prompt("Sirket adi (gorunum icin):", "Sirket");
    if (!companyName?.trim()) return;

    const tcNo = window.prompt("T.C. No:", "10000000000");
    if (!tcNo?.trim()) return;

    const position = window.prompt("Pozisyon:", "Saha Teknisyeni");
    if (!position?.trim()) return;

    const department = window.prompt("Departman:", "Operasyon");
    if (!department?.trim()) return;

    const phone = window.prompt("Telefon:", "+90");
    if (!phone?.trim()) return;

    const email = window.prompt("E-posta:", "personel@");
    if (!email?.trim()) return;

    if (!token) {
      window.alert("Oturum bulunamadi. Lutfen tekrar giris yapin.");
      return;
    }

    try {
      await apiPost(
        "/employees",
        {
          companyId,
          fullName: fullName.trim(),
          tcNo: tcNo.trim(),
          position: position.trim(),
          department: department.trim(),
          phone: phone.trim(),
          email: email.trim(),
        },
        { token },
      );

      setEmployeeRows((prev) => [
        {
          name: fullName.trim(),
          roleKey: "employee_role_field_technician",
          company: companyName.trim(),
          trainingKey: "employee_training_hazard_missing",
          medicalKey: "employee_medical_due_12_days",
          statusKey: "status_follow_up",
          tone: "warning",
        },
        ...prev,
      ]);

      window.alert("Calisan basariyla eklendi.");
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Calisan eklenemedi.");
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={t("employees_eyebrow")}
        title={t("employees_title")}
        description={t("employees_desc")}
        actionLabel={t("employees_action")}
        onAction={() => {
          void handleInviteEmployee();
        }}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {employeeStats.map((item) => (
          <SectionCard
            key={item.labelKey}
            title={t(item.labelKey)}
            description={t(item.helperKey)}
          >
            <p className="font-heading text-3xl font-semibold text-slate-950">
              {item.value}
            </p>
          </SectionCard>
        ))}
      </section>

      <SectionCard
        title={t("employees_registry_title")}
        description={t("employees_registry_desc")}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {employeeRows.map((employee) => (
            <article
              key={employee.name}
              className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{employee.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {t(employee.roleKey)} · {employee.company}
                  </p>
                </div>
                <StatusBadge tone={employee.tone}>{t(employee.statusKey)}</StatusBadge>
              </div>

              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-slate-400">{t("employees_training_label")}</dt>
                  <dd className="mt-1 font-medium text-slate-700">{t(employee.trainingKey)}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">{t("employees_medical_label")}</dt>
                  <dd className="mt-1 font-medium text-slate-700">{t(employee.medicalKey)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
