import { db } from "../../client"
import type { AccountId, TweetId } from "../../ids"

export const unlikeTweet = async (accountId: AccountId, tweetId: TweetId) => {
  return await db.account.update({
    where: { accountId },
    data: {
      likes: {
        disconnect: { tweetId },
      },
    },
  })
}