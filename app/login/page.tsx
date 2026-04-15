"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SectionCard } from "@/components/ui/section-card";
import { getApiBaseUrl } from "@/lib/api/client";
import { useAuth } from "@/hooks/use-auth";
import { useI18n } from "@/hooks/use-i18n";

type FormErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, isInitializing, login } = useAuth();
  const { locale, setLocale, t } = useI18n();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/dashboard");

  useEffect(() => {
    if (!isInitializing && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, isInitializing, router]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next = params.get("next");
    if (next && next.startsWith("/")) {
      setRedirectPath(next);
    }
  }, []);

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      nextErrors.email = t("login_error_email_required");
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = t("login_error_email_invalid");
    }

    if (!password.trim()) {
      nextErrors.password = t("login_error_password_required");
    } else if (password.trim().length < 6) {
      nextErrors.password = t("login_error_password_min");
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await login({ email, password });
      router.replace(redirectPath);
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : t("login_error_unexpected"),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(14,116,144,0.15),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(13,148,136,0.14),transparent_34%)]" />

      <div className="w-full max-w-5xl rounded-[32px] border border-white/65 bg-white/78 p-3 shadow-panel backdrop-blur-xl sm:p-6">
        <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
          <section className="rounded-[26px] bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
              {t("login_platform")}
            </p>
            <h1 className="font-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {t("login_title")}
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {t("login_desc")}
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {t("login_backend_api")}
              </p>
              <p className="mt-3 text-sm text-slate-200">{getApiBaseUrl()}</p>
              <p className="mt-1 text-xs text-slate-400">
                {t("login_backend_hint")}
              </p>
            </div>
          </section>

          <SectionCard className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
              <h2 className="font-heading text-2xl font-semibold text-slate-950">
                {t("login_sign_in")}
              </h2>
              <p className="text-sm text-slate-500">
                {t("login_continue")}
              </p>
              </div>
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-0.5">
                <button
                  type="button"
                  onClick={() => setLocale("tr")}
                  className={`rounded-lg px-2 py-1 text-[11px] font-semibold transition ${
                    locale === "tr"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
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
                >
                  EN
                </button>
              </div>
            </div>

            <form className="mt-7 space-y-4" onSubmit={handleSubmit} noValidate>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">{t("login_email")}</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t("login_email_placeholder")}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  autoComplete="email"
                />
                {errors.email ? (
                  <p className="text-xs text-rose-600">{errors.email}</p>
                ) : null}
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  {t("login_password")}
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={t("login_password_placeholder")}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  autoComplete="current-password"
                />
                {errors.password ? (
                  <p className="text-xs text-rose-600">{errors.password}</p>
                ) : null}
              </label>

              {serverError ? (
                <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {serverError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-700"
              >
                {isSubmitting ? t("login_signing_in") : t("login_sign_in")}
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-slate-500">
              {t("login_auth_backend")}
            </p>
            <p className="mt-3 text-center text-xs text-slate-400">
              <Link href="/" className="underline underline-offset-2">
                {t("login_go_home")}
              </Link>
            </p>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
