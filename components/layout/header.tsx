"use client";

import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/use-auth";
import { useI18n } from "@/hooks/use-i18n";

type HeaderProps = {
  onOpenMenu: () => void;
};

export function Header({ onOpenMenu }: HeaderProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { locale, setLocale, t } = useI18n();

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 lg:hidden"
            aria-label={t("header_open_navigation")}
          >
            <MenuIcon />
          </button>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              ISG360
            </p>
            <h1 className="font-heading text-lg font-semibold text-slate-950">
              {t("header_title")}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-3xl border border-slate-200/80 bg-white px-2 py-2 shadow-sm sm:gap-3 sm:px-3">
          <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-0.5">
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={`rounded-lg px-2 py-1 text-[11px] font-semibold transition ${
                locale === "tr"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              aria-label={t("language_turkish")}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-lg px-2 py-1 text-[11px] font-semibold transition ${
                locale === "en"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              aria-label={t("language_english")}
            >
              EN
            </button>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-900">
              {user?.name ?? t("header_safety_user")}
            </p>
            <p className="text-xs text-slate-500">{user?.email ?? t("header_no_email")}</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-sky-500 font-semibold text-white">
            {getInitials(user?.name)}
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            {t("header_logout")}
          </button>
        </div>
      </div>
    </header>
  );
}

function getInitials(name?: string) {
  if (!name) return "SU";
  const chunks = name.split(" ").filter(Boolean);
  return chunks
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase() ?? "")
    .join("");
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}
