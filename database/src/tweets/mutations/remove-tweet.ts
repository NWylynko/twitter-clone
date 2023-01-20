import { db } from "db"
import type { TweetId } from "@/ids"

export const removeTweet = (tweetId: TweetId) => {
  return db.tweet.delete({
    where: { tweetId },
  })
}
