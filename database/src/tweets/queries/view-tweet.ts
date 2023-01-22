import { db } from "../../client"

export const viewTweet = (tweetId: string) => {
  return db.tweet.findUnique({
    where: {
      tweetId,
    },
  })
}