"use client";

import { create } from "zustand";
import { shallow } from 'zustand/shallow'
import { persist, createJSONStorage } from 'zustand/middleware'

import type { User } from "auth/src/web/types"

type Setters = {
  setUser: (user: User | undefined) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | undefined) => void;
}

type LoggedIn = {
  user: User;
  loading: false,
  error: undefined;
  jwt: string;
}

type LoggedOut = {
  user: undefined;
  loading: false;
  error: undefined;
  jwt: undefined;
}

type LoadingState = {
  user: undefined;
  loading: true;
  error: undefined;
  jwt: undefined;
}

type ErrorState = {
  user: undefined;
  loading: false;
  error: Error;
  jwt: undefined;
}

type AuthState = LoggedIn | LoggedOut | LoadingState | ErrorState

type AuthStore = Setters & AuthState

const useAuthStore = create<AuthStore>()(persist((set, get) => ({
  user: undefined,
  setUser: async (user) => {
    set({ user })

    if (user) {
      set({ jwt: await user.getIdToken() })
    } else {
      set({ jwt: undefined })
    }
  },
  loading: true,
  setLoading: (loading) => set({ loading: loading as true }),
  error: undefined,
  setError: (error) => set({ error }),
  jwt: undefined
}), {
  name: 'user-auth',
  storage: createJSONStorage<AuthStore>(() => localStorage)
}))

export const useAuth = () => useAuthStore(({ user, loading, error, jwt }) => ({ user, loading, error, jwt }), shallow)
export const useSetAuth = () => useAuthStore(({ setUser, setLoading, setError }) => ({ setUser, setLoading, setError }), shallow)
export const useAuthJWT = () => useAuthStore(({ jwt }) => jwt)