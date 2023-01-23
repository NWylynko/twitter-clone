import { db } from "../../client"
import type { AccountId, TweetId } from "../../ids"

type NewTweet = {
  tweetId: TweetId
  text: string
  hashtags: string[],
  quotes?: TweetId
}

export const createTweet = async (accountId: AccountId, newTweet: NewTweet) => {
  return await db.tweet.create({
    data: {
      tweetId: newTweet.tweetId,
      text: newTweet.text,
      authorId: accountId,
      likes: 0,
      retweets: 0,
      hashtags: {
        connectOrCreate: newTweet.hashtags.map(name => ({
          where: { name },
          create: { name },
        })),
      },
      quotes: newTweet.quotes ? {
        connect: {
          tweetId: newTweet.quotes,
        }
      } : undefined,
    },
  })
}