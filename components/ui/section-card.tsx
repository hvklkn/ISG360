import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionCardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionCard({
  title,
  description,
  children,
  className,
}: SectionCardProps) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-white/65 bg-white/88 p-6 shadow-panel backdrop-blur-xl transition hover:shadow-xl",
        className,
      )}
    >
      {title ? (
        <div className="mb-6">
          <h3 className="font-heading text-xl font-semibold text-slate-950">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
