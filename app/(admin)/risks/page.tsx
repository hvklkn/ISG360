"use client";

import { useState } from "react";

import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { riskMatrix } from "@/data/mock-data";
import { useI18n } from "@/hooks/use-i18n";

type RiskRow = {
  titleKey: (typeof riskMatrix)[number]["titleKey"];
  levelKey: (typeof riskMatrix)[number]["levelKey"];
  tone: (typeof riskMatrix)[number]["tone"];
  site: string;
  owner: string;
  reviewDate: string;
  mitigationKey: (typeof riskMatrix)[number]["mitigationKey"];
  statusKey: (typeof riskMatrix)[number]["statusKey"];
};

export default function RisksPage() {
  const { t } = useI18n();
  const [riskRows, setRiskRows] = useState<RiskRow[]>(
    riskMatrix.map((item) => ({ ...item })),
  );

  const handleAddRisk = () => {
    const site = window.prompt("Risk sahasi:", "Yeni Saha");
    if (!site?.trim()) return;

    const owner = window.prompt("Sorumlu kisi:", "Uzman");
    if (!owner?.trim()) return;

    const template = riskRows[0];
    if (!template) return;

    setRiskRows((prev) => [
      {
        ...template,
        site: site.trim(),
        owner: owner.trim(),
        reviewDate: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={t("risks_eyebrow")}
        title={t("risks_title")}
        description={t("risks_desc")}
        actionLabel={t("risks_action")}
        onAction={handleAddRisk}
      />

      <SectionCard
        title={t("risks_open_register_title")}
        description={t("risks_open_register_desc")}
      >
        <div className="grid gap-4">
          {riskRows.map((risk, index) => (
            <article
              key={`${risk.titleKey}-${risk.site}-${index}`}
              className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-5"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-slate-950">{t(risk.titleKey)}</h3>
                    <StatusBadge tone={risk.tone}>{t(risk.levelKey)}</StatusBadge>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{risk.site}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>
                    {t("risks_owner")}: {risk.owner}
                  </span>
                  <span>
                    {t("risks_review")}: {risk.reviewDate}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-medium text-slate-800">{t("risks_mitigation")}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{t(risk.mitigationKey)}</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-medium text-slate-800">{t("risks_current_status")}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{t(risk.statusKey)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
