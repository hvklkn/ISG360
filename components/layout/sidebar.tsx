"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/mock-data";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

type SidebarProps = {
  mobileMenuOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ mobileMenuOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm transition lg:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[290px] border-r border-white/40 bg-slate-950 px-5 py-6 text-slate-100 shadow-2xl transition duration-300 lg:sticky lg:top-0 lg:block lg:translate-x-0 lg:self-start lg:shadow-none",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                {t("sidebar_platform")}
              </p>
              <h2 className="font-heading mt-2 text-2xl font-semibold text-white">
                ISG360
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-white lg:hidden"
              aria-label={t("sidebar_close_navigation")}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">{t("sidebar_safety_performance")}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {t("sidebar_safety_performance_desc")}
            </p>
          </div>

          <nav className="mt-8 space-y-2">
            {navigationItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-white text-slate-950 shadow-lg shadow-slate-950/10"
                      : "text-slate-400 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <NavIcon icon={item.icon} active={active} />
                  <span>{t(item.labelKey)}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/15 to-sky-500/10 p-4">
            <p className="text-sm font-semibold text-white">{t("sidebar_need_attention")}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {t("sidebar_need_attention_desc")}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

type IconName = (typeof navigationItems)[number]["icon"];

function NavIcon({ icon, active }: { icon: IconName; active: boolean }) {
  const className = cn(
    "h-5 w-5 transition",
    active ? "text-teal-600" : "text-current group-hover:text-white",
  );

  switch (icon) {
    case "dashboard":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
        >
          <path
            d="M4 13h7V4H4v9Zm9 7h7v-5h-7v5Zm0-9h7V4h-7v7ZM4 20h7v-5H4v5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "companies":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
        >
          <path
            d="M4 20h16M7 20V8h10v12M10 8V4h4v4M9 12h.01M15 12h.01M9 16h.01M15 16h.01"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "employees":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
        >
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10.5 10v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "trainings":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
        >
          <path
            d="M12 6 3 11l9 5 9-5-9-5Zm0 5v10M7 13.8v3.6c0 .8 2.24 1.6 5 1.6s5-.8 5-1.6v-3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "risks":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
        >
          <path
            d="M12 9v4M12 17h.01M10.3 3.84 1.82 18a2 2 0 0 0 1.72 3h16.92A2 2 0 0 0 22.18 18L13.7 3.84a2 2 0 0 0-3.4 0Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "documents":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
        >
          <path
            d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6M8 13h8M8 17h8M8 9h3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
