"use client";

import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  dashboardSummaryCards,
  recentActivity,
  riskStatusOverview,
  upcomingVisits,
} from "@/data/mock-data";
import { useI18n } from "@/hooks/use-i18n";

export default function DashboardPage() {
  const { t } = useI18n();

  const handleExport = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      summary: dashboardSummaryCards,
      risks: riskStatusOverview,
      visits: upcomingVisits,
      activity: recentActivity,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `isg360-report-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={t("dashboard_eyebrow")}
        title={t("dashboard_title")}
        description={t("dashboard_desc")}
        actionLabel={t("dashboard_export")}
        onAction={handleExport}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardSummaryCards.map((stat) => (
          <StatCard
            key={stat.labelKey}
            label={t(stat.labelKey)}
            value={stat.value}
            trend={stat.trend}
            helper={t(stat.helperKey)}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <SectionCard
          title={t("dashboard_risk_overview_title")}
          description={t("dashboard_risk_overview_desc")}
        >
          <div className="space-y-4">
            {riskStatusOverview.map((item) => (
              <div key={item.labelKey} className="space-y-2 rounded-2xl bg-slate-50/80 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{t(item.labelKey)}</span>
                  <span className="text-slate-500">
                    {item.count} {t("dashboard_risk_count_suffix")}
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-600 to-sky-500"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title={t("dashboard_visits_title")}
          description={t("dashboard_visits_desc")}
        >
          <div className="space-y-4">
            {upcomingVisits.map((visit) => (
              <div
                key={visit.company}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 transition hover:bg-slate-100/80"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{visit.company}</p>
                    <p className="mt-1 text-sm text-slate-500">{visit.location}</p>
                  </div>
                  <StatusBadge tone={visit.tone}>{t(visit.statusKey)}</StatusBadge>
                </div>
                <p className="mt-4 text-sm text-slate-600">{visit.date}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <SectionCard
        title={t("dashboard_recent_activity_title")}
        description={t("dashboard_recent_activity_desc")}
      >
        <div className="space-y-4">
          {recentActivity.map((item) => (
            <div
              key={item.titleKey}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 p-4 transition hover:bg-slate-50/70 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-900">{t(item.titleKey)}</p>
                <p className="mt-1 text-sm text-slate-500">{t(item.descriptionKey)}</p>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge tone={item.tone}>{t(item.statusKey)}</StatusBadge>
                <span className="text-sm text-slate-400">{t(item.timeKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
