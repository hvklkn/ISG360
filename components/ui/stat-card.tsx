import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  trend: string;
  helper: string;
  className?: string;
};

export function StatCard({ label, value, trend, helper, className }: StatCardProps) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-white/65 bg-white/88 p-5 shadow-panel backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="font-heading mt-3 text-3xl font-semibold text-slate-950">
            {value}
          </p>
        </div>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
          {trend}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-500">{helper}</p>
    </section>
  );
}
