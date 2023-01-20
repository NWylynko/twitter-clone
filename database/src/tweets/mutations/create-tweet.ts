import { db } from "db"
import type { TweetId, AccountId } from "@/ids"

type NewTweet = {
  tweetId: TweetId
  text: string
  hashtags: {
    hashtagId: string
    name: string
  }[]
}

export const createTweet = (accountId: AccountId, newTweet: NewTweet) => {
  return db.tweet.create({
    data: {
      ...newTweet,
      authorId: accountId,
      likes: 0,
      retweets: 0,
      hashtags: {
        connectOrCreate: newTweet.hashtags.map(hashtag => ({
          where: hashtag,
          create: hashtag,
        })),
      }
    },
  })
}