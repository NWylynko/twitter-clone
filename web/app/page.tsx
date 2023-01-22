import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Navigation } from './Navigation'

const Fetch = dynamic(() => import('./Fetch'), { ssr: false })
const Logout = dynamic(() => import('./Logout'), { ssr: false })

export default function Home() {

  return (
    <main>

    </main>
  )
}
