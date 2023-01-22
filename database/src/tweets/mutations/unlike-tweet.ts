import { db } from "../../client"
import type { AccountId, TweetId } from "../../ids"

export const unlikeTweet = (accountId: AccountId, tweetId: TweetId) => {
  return db.account.update({
    where: { accountId },
    data: {
      likes: {
        disconnect: { tweetId },
      },
    },
  })
}