import { db } from "../../client"
import type { AccountId, TweetId } from "../../ids"

export const likeTweet = async (accountId: AccountId, tweetId: TweetId) => {
  return await db.tweet.update({
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