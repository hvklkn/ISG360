"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/hooks/use-auth";
import { useI18n } from "@/hooks/use-i18n";

type AuthGuardProps = {
  children: ReactNode;
};

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isInitializing } = useAuth();
  const { t } = useI18n();

  useEffect(() => {
    if (!isInitializing && !isAuthenticated) {
      const next = encodeURIComponent(pathname || "/dashboard");
      router.replace(`/login?next=${next}`);
    }
  }, [isAuthenticated, isInitializing, pathname, router]);

  if (isInitializing || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-sm rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-panel backdrop-blur-xl">
          <p className="font-heading text-lg font-semibold text-slate-950">
            {t("auth_guard_title")}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {t("auth_guard_desc")}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
