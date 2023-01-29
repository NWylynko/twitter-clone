import { tw } from 'typewind';
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
    <nav className={tw.w_64.h_full.flex.flex_col.justify_between}>
      <div className={tw.flex.flex_col}>
        <div className={tw.m_2.py_2.px_4}>
          <TwitterIcon size={32} />
        </div>
        <Item to="/" label="Home" icon={HomeIcon} />
        <Item to="/explore" label="Explore" icon={HashtagIcon} />
        <Item to="/notifications" label="Notifications" icon={BellIcon } />
        <Item to="/messages" label="Messages" icon={MailIcon } />
        <Item to="/bookmarks" label="Bookmarks" icon={BookmarkIcon } />
        <Item to="/profile" label="Profile" icon={UserIcon } />
        <button className={tw.bg_sky_500.hover(tw.bg_sky_600).p_3.mx_2.my_4.transition_colors.rounded_full} style={{ width: "calc(100% - 16px)"}}>
          <span className={tw.text_xl.p_2.m_2}>Tweet</span>
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
    <Link href={to} className={tw.flex.items_center.gap_4.m_2.py_2.px_4.hover(tw.bg_zinc_800).transition_colors.rounded_3xl.w_min}>
      <Icon size={32} />
      <span className={tw.text_xl}>{label}</span>
    </Link>
  )
}