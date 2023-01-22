"use client";

import { useAuth } from "@/hooks/useAuth";

const User = () => {

  const { user } = useAuth();

  if (!user) {
    throw new Error("Not logged in")
  }

  return (
    <div className="grid grid-rows-3">
      <div className="w-10 h-10 rounded-full bg-zinc-400">
        {user.photoURL && <img className="rounded-full" src={user.photoURL} />}
      </div>
    </div>
  )
}

// this is default exported
// because it has to be dynamic lazy loaded without ssr
// because it uses useAuth
export default User

// here is how u import it
// import dynamic from 'next/dynamic'

// const User = dynamic(() => import('./User'), {
//   ssr: false,
// })