import { z } from "zod"
import type { Tweets } from "schemas/src"
import * as tweets from "schemas/src/tweets"
import * as db from "database/src/tweets/mutations"

import { extractHashtags } from "core/src/extractHashtags"

const createTweet = (event: z.infer<Tweets["createTweet"]["server"]>) => {
  const hashtags = extractHashtags(event.payload.text)
  return db.createTweet(
    event.accountId,
    {
      tweetId: event.payload.tweetId,
      text: event.payload.text,
      hashtags,
      quotes: event.payload.quotes,
    }
  )
}

const likeTweet = (event: z.infer<Tweets["likeTweet"]["server"]>) => {
  return db.likeTweet(
    event.accountId,
    event.payload.tweetId
  )
}

const removeTweet = (event: z.infer<Tweets["removeTweet"]["server"]>) => {
  return db.removeTweet(
    event.payload.tweetId
  )
}

const retweetTweet = (event: z.infer<Tweets["retweetTweet"]["server"]>) => {
  return db.retweetTweet(
    event.accountId,
    event.payload.tweetId
  )
}

const unlikeTweet = (event: z.infer<Tweets["unlikeTweet"]["server"]>) => {
  return db.unlikeTweet(
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