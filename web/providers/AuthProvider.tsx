"use client"

import { useEffect } from 'react';
import { PropsWithChildren } from "react";
import { onAuthStateChange } from "auth/src/web/onAuthStateChange"
import { useSetAuth } from '@/hooks/useAuth';

export const AuthProvider = ({ children}: PropsWithChildren) => {

  const { setUser, setError, setLoading } = useSetAuth()

  useEffect(() => {
    return onAuthStateChange({
      onUser: setUser,
      onError: setError,
      onDoneLoading: () => setLoading(false)
    })
  }, [])

  return (
    <>
      {children}
    </>
  )
}