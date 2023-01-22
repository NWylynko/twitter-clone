import Link from "next/link"
import dynamic from 'next/dynamic'

import type { IconType } from "@react-icons/all-files"

import { BsTwitter as TwitterIcon } from "@react-icons/all-files/bs/BsTwitter"
import { RiHome7Fill as HomeIcon } from "@react-icons/all-files/ri/RiHome7Fill"
import { FaHashtag as HashtagIcon } from "@react-icons/all-files/fa/FaHashtag"
import { BiBell as BellIcon } from "@react-icons/all-files/bi/BiBell"
import { IoMailOutline as MailIcon } from "@react-icons/all-files/io5/IoMailOutline"
import { FaRegBookmark as BookmarkIcon } from "@react-icons/all-files/fa/FaRegBookmark"
import { HiOutlineUser as UserIcon } from "@react-icons/all-files/hi/HiOutlineUser"

const User = dynamic(() => import('./User'), { ssr: false })

export const Navigation = () => {
  return (
    <nav className="w-56">
      <div>
        <div className=" m-2 py-2 px-4">
          <TwitterIcon size={32} />
        </div>
        <Item to="/" label="Home" icon={HomeIcon} />
        <Item to="/explore" label="Explore" icon={HashtagIcon} />
        <Item to="/notifications" label="Notifications" icon={BellIcon } />
        <Item to="/messages" label="Messages" icon={MailIcon } />
        <Item to="/bookmarks" label="Bookmarks" icon={BookmarkIcon } />
        <Item to="/profile" label="Profile" icon={UserIcon } />
        <button className="bg-sky-500 hover:bg-sky-600 p-3 mx-2 my-4 w-full transition-colors rounded-full">
          <span className="text-xl p-2 m-2">Tweet</span>
        </button>
      </div>
      <div>
        <User />
      </div>
    </nav>
  )
}

type ItemProps = {
  to: string
  label: string
  icon: IconType
}

const Item = ({ to, label, icon: Icon }: ItemProps) => {
  return (
    <Link href={to} className="flex items-center gap-4 m-2 py-2 px-4 hover:bg-zinc-800 transition-colors rounded-3xl w-min">
      <Icon size={32} />
      <span className="text-xl">{label}</span>
    </Link>
  )
}