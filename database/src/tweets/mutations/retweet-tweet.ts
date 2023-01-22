import { db } from "../../client"
import type { AccountId, TweetId } from "../../ids"

export const retweetTweet = (accountId: AccountId, tweetId: TweetId) => {
  return db.account.update({
    where: { accountId },
    data: {
      retweets: {
        connect: { tweetId },
      },
    },
  })
}