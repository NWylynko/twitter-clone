"use client";

import { tw } from "typewind";
import { authWithGoogle } from "auth/src/web/authWithGoogle";

export const AuthButtons = () => {
  return (
    <div>
      <button className={tw.p_2.m_2.border_2.border_black.border_solid.rounded_xl} onClick={authWithGoogle}>Login with Google</button>
    </div>
  )
}