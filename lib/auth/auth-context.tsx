"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { fetchCurrentUser, loginRequest } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import type { AuthUser, LoginRequest } from "@/types/auth";

import { clearStoredToken, getStoredToken, storeToken } from "./token-storage";

type AuthContextValue = {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  login: (payload: LoginRequest) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      const storedToken = getStoredToken();
      if (!storedToken) {
        if (mounted) {
          setIsInitializing(false);
        }
        return;
      }

      try {
        const currentUser = await fetchCurrentUser(storedToken);
        if (!mounted) return;
        setToken(storedToken);
        setUser(currentUser);
      } catch {
        clearStoredToken();
        if (!mounted) return;
        setToken(null);
        setUser(null);
      } finally {
        if (mounted) {
          setIsInitializing(false);
        }
      }
    };

    void initializeAuth();

    return () => {
      mounted = false;
    };
  }, []);

  const login = async (payload: LoginRequest) => {
    const response = await loginRequest(payload);
    const nextToken = response.accessToken;

    storeToken(nextToken);
    setToken(nextToken);
    setUser(response.user);
  };

  const logout = () => {
    clearStoredToken();
    setToken(null);
    setUser(null);
  };

  const refreshUser = async () => {
    const activeToken = token ?? getStoredToken();
    if (!activeToken) {
      throw new ApiError("Not authenticated.", 401);
    }

    const currentUser = await fetchCurrentUser(activeToken);
    setToken(activeToken);
    setUser(currentUser);
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(user && token),
      isInitializing,
      login,
      logout,
      refreshUser,
    }),
    [isInitializing, token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
}

