type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionDisabled?: boolean;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actionLabel,
  onAction,
  actionDisabled = false,
}: PageHeaderProps) {
  return (
    <section className="overflow-hidden rounded-[32px] border border-white/65 bg-white/85 px-6 py-7 shadow-panel backdrop-blur-xl sm:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-teal-700">{eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-balance text-sm leading-7 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {actionLabel ? (
          <button
            type="button"
            onClick={onAction}
            disabled={actionDisabled}
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
}
