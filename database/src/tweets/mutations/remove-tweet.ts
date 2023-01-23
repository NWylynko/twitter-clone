import { db } from "../../client"
import type { TweetId } from "../../ids"

export const removeTweet = async (tweetId: TweetId) => {
  return await db.tweet.delete({
    where: { tweetId },
  })
}
