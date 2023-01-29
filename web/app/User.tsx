"use client";

import { tw } from "typewind";
import { useAuth } from "@/hooks/useAuth";

const User = () => {

  const { user } = useAuth();

  if (!user) {
    return <></>
  }

  return (
    <div className={tw.grid.grid_cols_3}>
      <div className={tw.w_10.h_10.rounded_full.bg_zinc_400}>
        {user.photoURL && <img className={tw.rounded_full} src={user.photoURL} />}
      </div>
      <div>
        <span>{user.displayName}</span>
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