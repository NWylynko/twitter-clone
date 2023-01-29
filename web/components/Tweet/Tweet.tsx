import dynamic from 'next/dynamic'
import { tw } from 'typewind'

const Like = dynamic(() => import('./Actions/Like'), { ssr: false })
const Reply = dynamic(() => import('./Actions/Reply'), { ssr: false })
const Retweet = dynamic(() => import('./Actions/Retweet'), { ssr: false })
const Share = dynamic(() => import('./Actions/Share'), { ssr: false })

type TweetProps = {
  tweetId: string
  user: {
    name: string
    handle: string
    profileUrl: string
  },
  text: string
  createdAt: string
  replyCount: number
  retweetCount: number
  retweeted: boolean
  likeCount: number
  liked: boolean
}

export const Tweet = (props: TweetProps) => {
  return (
    <div className={tw.flex.flex_row.px_4.py_2.gap_2.border_solid.border_b.border_zinc_700} style={{ width: 600 }}>
      <div className={tw.w_12.h_12.rounded_full.overflow_hidden}>
        <img src={props.user.profileUrl} alt={props.user.name} />
      </div>
      <div>
        <div className={tw.flex.flex_row.gap_2}>
          <h3 className={tw.font_bold}>{props.user.name}</h3>
          <span className={tw.text_zinc_500}>@{props.user.handle} · {props.createdAt}</span>
        </div>
        <div>
          <span>{props.text}</span>
        </div>
        <div className={tw.flex}>
          <Reply tweetId={props.tweetId} replies={props.replyCount} />
          <Retweet tweetId={props.tweetId} retweets={props.retweetCount} retweeted={props.retweeted} />
          <Like tweetId={props.tweetId} likes={props.likeCount} liked={props.liked} />
          <Share tweetId={props.tweetId} />
        </div>
      </div>
    </div>
  )
}