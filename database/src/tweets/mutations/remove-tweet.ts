import { db } from "../../client"
import type { TweetId } from "../../ids"

export const removeTweet = (tweetId: TweetId) => {
  return db.tweet.delete({
    where: { tweetId },
  })
}
