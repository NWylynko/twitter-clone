"use client";

import { authWithGoogle } from "auth/src/web/authWithGoogle";

export const AuthButtons = () => {
  return (
    <div>
      <button className="p-2 m-2 border-2 border-black border-solid rounded-xl" onClick={authWithGoogle}>Login with Google</button>
    </div>
  )
}