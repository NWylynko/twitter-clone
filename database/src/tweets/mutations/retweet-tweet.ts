import { db } from "../../client"
import type { AccountId, TweetId } from "../../ids"

export const retweetTweet = async (accountId: AccountId, tweetId: TweetId) => {
  return await db.account.update({
    where: { accountId },
    data: {
      retweets: {
        connect: { tweetId },
      },
    },
  })
}