import { z } from "zod"
import type { Tweets } from "schemas"
import { tweets } from "schemas"
import { mutations } from "database"

const db = mutations.tweets

import { extractHashtags } from "core/dist/extractHashtags"

const createTweet = async (event: z.infer<Tweets["createTweet"]["server"]>) => {
  const hashtags = extractHashtags(event.payload.text)
  await db.createTweet(
    event.accountId,
    {
      tweetId: event.payload.tweetId,
      text: event.payload.text,
      hashtags,
      quotes: event.payload.quotes,
    }
  )
}

const likeTweet = async (event: z.infer<Tweets["likeTweet"]["server"]>) => {
  await db.likeTweet(
    event.accountId,
    event.payload.tweetId
  )
}

const removeTweet = async (event: z.infer<Tweets["removeTweet"]["server"]>) => {
  await db.removeTweet(
    event.payload.tweetId
  )
}

const retweetTweet = async (event: z.infer<Tweets["retweetTweet"]["server"]>) => {
  await db.retweetTweet(
    event.accountId,
    event.payload.tweetId
  )
}

const unlikeTweet = async (event: z.infer<Tweets["unlikeTweet"]["server"]>) => {
  await db.unlikeTweet(
    event.accountId,
    event.payload.tweetId
  )
}

export const tweetsHandlers = {
  "create-tweet-1": {
    handler: createTweet,
    schema: tweets.createTweet.server,
  },
  "like-tweet-1": {
    handler: likeTweet,
    schema: tweets.likeTweet.server,
  },
  "remove-tweet-1": {
    handler: removeTweet,
    schema: tweets.removeTweet.server,
  },
  "retweet-tweet-1": {
    handler: retweetTweet,
    schema: tweets.retweetTweet.server,
  },
  "unlike-tweet-1": {
    handler: unlikeTweet,
    schema: tweets.unlikeTweet.server,
  },
} as const