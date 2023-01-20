import { db } from "db"

export const viewTweet = (tweetId: string) => {
  return db.tweet.findUnique({
    where: {
      tweetId,
    },
  })
}