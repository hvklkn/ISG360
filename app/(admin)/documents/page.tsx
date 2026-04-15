"use client";

import { useState } from "react";

import { PageHeader } from "@/components/ui/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { documentGroups } from "@/data/mock-data";
import { useI18n } from "@/hooks/use-i18n";

type DocumentGroupRow = {
  titleKey: (typeof documentGroups)[number]["titleKey"];
  count: string;
  statusKey: (typeof documentGroups)[number]["statusKey"];
  tone: (typeof documentGroups)[number]["tone"];
  descriptionKey: (typeof documentGroups)[number]["descriptionKey"];
};

export default function DocumentsPage() {
  const { t } = useI18n();
  const [documentRows, setDocumentRows] = useState<DocumentGroupRow[]>(
    documentGroups.map((item) => ({ ...item })),
  );

  const handleUploadDocument = () => {
    const countInput = window.prompt("Yuklenecek dosya adedi:", "1");
    const count = Number(countInput);
    if (!Number.isFinite(count) || count <= 0) {
      window.alert("Gecerli bir dosya adedi girin.");
      return;
    }

    const template = documentRows[0];
    if (!template) return;

    setDocumentRows((prev) => [
      {
        ...template,
        count: `${count} documents`,
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={t("documents_eyebrow")}
        title={t("documents_title")}
        description={t("documents_desc")}
        actionLabel={t("documents_action")}
        onAction={handleUploadDocument}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {documentRows.map((group, index) => (
          <SectionCard
            key={`${group.titleKey}-${index}`}
            title={t(group.titleKey)}
            description={t(group.descriptionKey)}
          >
            <div className="flex items-center justify-between">
              <p className="font-heading text-3xl font-semibold text-slate-950">
                {group.count}
              </p>
              <StatusBadge tone={group.tone}>{t(group.statusKey)}</StatusBadge>
            </div>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
