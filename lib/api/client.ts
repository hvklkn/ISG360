const DEFAULT_API_BASE_URL = "http://localhost:4000/api";

export class ApiError extends Error {
  status: number;
  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  token?: string | null;
  body?: unknown;
};

export function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
    DEFAULT_API_BASE_URL
  );
}

export async function apiRequest<T>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const { token, body, headers, ...rest } = options;

  const requestHeaders = new Headers(headers);
  requestHeaders.set("Accept", "application/json");

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  const hasJsonBody = typeof body !== "undefined";
  if (hasJsonBody) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const endpoint = `${getApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
  const response = await fetch(endpoint, {
    ...rest,
    headers: requestHeaders,
    body: hasJsonBody ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  const raw = await response.text();
  const parsed = raw ? safeParseJson(raw) : null;

  if (!response.ok) {
    throw new ApiError(getErrorMessage(parsed, response.status), response.status, parsed);
  }

  if (!raw) {
    return undefined as T;
  }

  return (parsed as T) ?? (raw as T);
}

export function apiGet<T>(path: string, options: ApiRequestOptions = {}) {
  return apiRequest<T>(path, { ...options, method: "GET" });
}

export function apiPost<T>(
  path: string,
  body?: unknown,
  options: ApiRequestOptions = {},
) {
  return apiRequest<T>(path, { ...options, method: "POST", body });
}

export function apiPatch<T>(
  path: string,
  body?: unknown,
  options: ApiRequestOptions = {},
) {
  return apiRequest<T>(path, { ...options, method: "PATCH", body });
}

export function apiDelete<T>(path: string, options: ApiRequestOptions = {}) {
  return apiRequest<T>(path, { ...options, method: "DELETE" });
}

function safeParseJson(input: string): unknown {
  try {
    return JSON.parse(input) as unknown;
  } catch {
    return input;
  }
}

function getErrorMessage(payload: unknown, status: number) {
  if (typeof payload === "string" && payload.trim()) {
    return payload;
  }

  if (payload && typeof payload === "object") {
    const messageField = (payload as { message?: unknown }).message;
    if (Array.isArray(messageField)) {
      return messageField.join(", ");
    }
    if (typeof messageField === "string" && messageField.trim()) {
      return messageField;
    }
  }

  return status >= 500 ? "Server error. Please try again." : "Request failed.";
}
