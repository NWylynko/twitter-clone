"use client";

import { useAuth } from "@/hooks/useAuth";

export const User = () => {
  
  const auth = useAuth();
  
  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </div>
  )
}