"use client";

import { useState } from "react";

import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { trainingPrograms } from "@/data/mock-data";
import { useI18n } from "@/hooks/use-i18n";

type TrainingRow = {
  nameKey: (typeof trainingPrograms)[number]["nameKey"];
  summaryKey: (typeof trainingPrograms)[number]["summaryKey"];
  participants: number;
  progress: number;
  nextSession: string;
  statusKey: (typeof trainingPrograms)[number]["statusKey"];
  tone: (typeof trainingPrograms)[number]["tone"];
};

export default function TrainingsPage() {
  const { t } = useI18n();
  const [trainingRows, setTrainingRows] = useState<TrainingRow[]>(
    trainingPrograms.map((item) => ({ ...item })),
  );

  const handleCreateSession = () => {
    const participantsInput = window.prompt("Katilimci sayisi:", "25");
    const participants = Number(participantsInput);
    if (!Number.isFinite(participants) || participants <= 0) {
      window.alert("Gecerli bir katilimci sayisi girin.");
      return;
    }

    const progressInput = window.prompt("Tamamlanma yuzdesi (0-100):", "0");
    const progress = Number(progressInput);
    if (!Number.isFinite(progress) || progress < 0 || progress > 100) {
      window.alert("Tamamlanma yuzdesi 0 ile 100 arasinda olmali.");
      return;
    }

    const template = trainingRows[0];
    if (!template) return;

    setTrainingRows((prev) => [
      {
        ...template,
        participants,
        progress,
        nextSession: `${new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })} · Planlandi`,
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={t("trainings_eyebrow")}
        title={t("trainings_title")}
        description={t("trainings_desc")}
        actionLabel={t("trainings_action")}
        onAction={handleCreateSession}
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {trainingRows.map((training, index) => (
          <SectionCard
            key={`${training.nameKey}-${index}`}
            title={t(training.nameKey)}
            description={t(training.summaryKey)}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>
                  {training.participants} {t("trainings_participants_suffix")}
                </span>
                <StatusBadge tone={training.tone}>{t(training.statusKey)}</StatusBadge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{t("trainings_completion")}</span>
                  <span className="text-slate-500">{training.progress}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-teal-500"
                    style={{ width: `${training.progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50/90 p-4 text-sm text-slate-600">
                <p className="font-medium text-slate-800">{t("trainings_next_session")}</p>
                <p className="mt-1">{training.nextSession}</p>
              </div>
            </div>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
