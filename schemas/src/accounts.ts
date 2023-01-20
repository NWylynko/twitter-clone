import { z } from "zod";
import { defineEvent } from './defineEvent';
import { accountId } from "./primatives";

// accounts are special because we know the account id as its saved in the event
// so we don't need to store it in the payload

export const createAccount = defineEvent(
  { action: "create-account", version: 1 },
  {
    name: z.string(),
    handle: z.string(),
  },
  {}
)

export const updateAccount = defineEvent(
  { action: "update-account", version: 1 },
  {
    name: z.string(),
    bio: z.string(),
    location: z.string(),
    website: z.string().url(),
    profileImage: z.string().url(),
    coverImage: z.string().url(),
  },
  {}
)

export const followAccount = defineEvent(
  { action: "follow-account", version: 1 },
  {
    accountId,
  },
  {}
)

export const unfollowAccount = defineEvent(
  { action: "unfollow-account", version: 1 },
  {
    accountId,
  },
  {}
)

export const blockAccount = defineEvent(
  { action: "block-account", version: 1 },
  {
    accountId,
  },
  {}
)
