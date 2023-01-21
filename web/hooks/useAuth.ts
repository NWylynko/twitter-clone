"use client";

import { create } from "zustand";
import type { User } from "auth/src/web/types"
import { shallow } from 'zustand/shallow'

type AuthStore = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: Error | undefined;
  setError: (error: Error | undefined) => void;
}

const useAuthStore = create<AuthStore>()((set, get) => {
  return {
    user: undefined,
    setUser: (user) => set({ user }),
    loading: true,
    setLoading: (loading) => set({ loading }),
    error: undefined,
    setError: (error) => set({ error }),
  }
})

export const useAuth = () => useAuthStore(({ user, loading, error }) => ({ user, loading, error }), shallow)
export const useSetAuth = () => useAuthStore(({ setUser, setLoading, setError }) => ({ setUser, setLoading, setError }), shallow)