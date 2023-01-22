"use client"

import { logout } from "auth/src/web/logout";

const Logout = () => {
  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout