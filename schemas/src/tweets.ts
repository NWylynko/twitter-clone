import { z } from 'zod';
import { defineEvent } from './defineEvent';
import { id } from './primatives';

const tweetId = id;

export const createTweet = defineEvent(
  { action: "create-tweet", version: 1 },
  {
    text: z.string().max(280, { message: "Tweet text must be less than 280 characters" }),
    quotes: tweetId.optional(),
  },
  {
    tweetId
  }
)

export const removeTweet = defineEvent(
  { action: "remove-tweet", version: 1 },
  {
    tweetId,
  },
  {}
)

export const likeTweet = defineEvent(
  { action: "like-tweet", version: 1 },
  {
    tweetId,
  },
  {}
)

export const unlikeTweet = defineEvent(
  { action: "unlike-tweet", version: 1 },
  {
    tweetId,
  },
  {}
)

export const retweetTweet = defineEvent(
  { action: "retweet-tweet", version: 1 },
  {
    tweetId,
  },
  {}
)