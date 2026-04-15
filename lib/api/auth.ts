import type { AuthUser, LoginRequest, LoginResponse } from "@/types/auth";

import { apiGet, apiPost } from "./client";

export function loginRequest(payload: LoginRequest) {
  return apiPost<LoginResponse>("/auth/login", payload);
}

export function registerRequest(payload: {
  name: string;
  email: string;
  password: string;
  role?: AuthUser["role"];
}) {
  return apiPost<LoginResponse>("/auth/register", payload);
}

export function fetchCurrentUser(token: string) {
  return apiGet<AuthUser>("/auth/me", { token });
}
