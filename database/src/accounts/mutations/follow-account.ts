import { db } from "../../client"
import type { AccountId } from "../../ids"

export const followAccount = (accountId: AccountId, accountIdToFollow: AccountId) => {
  return db.account.update({
    where: { accountId },
    data: {
      following: {
        connect: { accountId: accountIdToFollow },
      },
    },
  })
}