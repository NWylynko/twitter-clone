import { z } from "zod"
import type { Accounts } from "schemas"
import * as accounts from "schemas/dist/accounts"
import * as db from "database/dist/accounts/mutations"

const createAccount = async (event: z.infer<Accounts["createAccount"]["server"]>) => {
  await  db.createAccount({
    accountId: event.accountId,
    name: event.payload.name,
    handle: event.payload.handle
  })
}

const updateAccount = async (event: z.infer<Accounts["updateAccount"]["server"]>) => {
  await db.updateAccount(
    event.accountId,
    event.payload
  )
}

const followAccount = async (event: z.infer<Accounts["followAccount"]["server"]>) => {
  await db.followAccount(
    event.accountId,
    event.payload.accountId
  )
}

const unfollowAccount = async (event: z.infer<Accounts["unfollowAccount"]["server"]>) => {
  await db.unfollowAccount(
    event.accountId,
    event.payload.accountId
  )
}

const blockAccount = async (event: z.infer<Accounts["blockAccount"]["server"]>) => {
  await db.blockAccount(
    event.accountId,
    event.payload.accountId
  )
}

const unblockAccount = async (event: z.infer<Accounts["unblockAccount"]["server"]>) => {
  await db.unblockAccount(
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