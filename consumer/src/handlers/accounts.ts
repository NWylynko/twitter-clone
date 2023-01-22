import { z } from "zod"
import type { Accounts } from "schemas/src"
import * as accounts from "schemas/src/accounts"
import * as db from "database/src/accounts/mutations"

const createAccount = (event: z.infer<Accounts["createAccount"]["server"]>) => {
  return db.createAccount({
    accountId: event.accountId,
    name: event.payload.name,
    handle: event.payload.handle
  })
}

const updateAccount = (event: z.infer<Accounts["updateAccount"]["server"]>) => {
  return db.updateAccount(
    event.accountId,
    event.payload
  )
}

const followAccount = (event: z.infer<Accounts["followAccount"]["server"]>) => {
  return db.followAccount(
    event.accountId,
    event.payload.accountId
  )
}

const unfollowAccount = (event: z.infer<Accounts["unfollowAccount"]["server"]>) => {
  return db.unfollowAccount(
    event.accountId,
    event.payload.accountId
  )
}

const blockAccount = (event: z.infer<Accounts["blockAccount"]["server"]>) => {
  return db.blockAccount(
    event.accountId,
    event.payload.accountId
  )
}

const unblockAccount = (event: z.infer<Accounts["unblockAccount"]["server"]>) => {
  return db.unblockAccount(
    event.accountId,
    event.payload.accountId
  )
}

export const accountsHandlers = {
  "create-account-1": { 
    handler: createAccount,
    schema: accounts.createAccount.server
  },
  "update-account-1": {
    handler: updateAccount,
    schema: accounts.updateAccount.server
  },
  "follow-account-1": {
    handler: followAccount,
    schema: accounts.followAccount.server
  },
  "unfollow-account-1": {
    handler: unfollowAccount,
    schema: accounts.unfollowAccount.server
  },
  "block-account-1": {
    handler: blockAccount,
    schema: accounts.blockAccount.server
  },
  "unblock-account-1": {
    handler: unblockAccount,
    schema: accounts.unblockAccount.server
  },
} as const