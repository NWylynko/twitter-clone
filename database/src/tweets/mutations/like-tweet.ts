import { db } from "../../client"
import type { AccountId, TweetId } from "../../ids"

export const likeTweet = (accountId: AccountId, tweetId: TweetId) => {
  return db.tweet.update({
    where: { tweetId },
    data: {
      likes: {
        increment: 1,
      },
      likedBy: {
        connect: { accountId },
      },
    },
  })
}