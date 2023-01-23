import "source-map-support/register"

export * as primatives from "./primatives"

import * as accounts from "./accounts"
import * as tweets from "./tweets"
import * as messages from "./messages"

export type Accounts = typeof accounts
export type Tweets = typeof tweets
export type Messages = typeof messages

export type Event =
  | Accounts[keyof Accounts]
  | Tweets[keyof Tweets]
  | Messages[keyof Messages]

export type SlimEvent = Event["event"]
export type ClientSchema = Event["client"]
export type ServerSchema = Event["server"]
export type PayloadSchema = Event["payload"]

export {
  accounts,
  tweets,
  messages
}