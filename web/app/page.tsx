import { Tweet } from '@/components/Tweet'
import HowLongAgo from '@nwylynko/how-long-ago'
import { tw } from 'typewind'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import { generateId } from "core/dist/generateId"

// const Fetch = dynamic(() => import('./Fetch'), { ssr: false })
// const Logout = dynamic(() => import('./Logout'), { ssr: false })

export default async function Home() {

  return (
    <main className={tw.border_l.border_r.border_solid.border_zinc_700}>
      <h1 className={tw.m_2.p_2.text_xl.font_bold}>Home</h1>
      <Tweet
        tweetId={generateId()}
        user={{
          name: 'John Doe',
          handle: 'johndoe',
          profileUrl: 'https://picsum.photos/128/128'
        }}
        text="This is a fake tweet"
        createdAt={HowLongAgo(Date.now() - 10000, {
          seconds: "s",
          minutes: "m",
          hours: "h",
          days: "d",
          else: "A long time ago"
        })}
        replyCount={10}
        retweetCount={20}
        retweeted={false}
        likeCount={55}
        liked={false}
      />
    </main>
  )
}
