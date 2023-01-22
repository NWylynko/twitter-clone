import { db } from "../../client"
import type { AccountId } from "../../ids"

export const unblockAccount = (accountId: AccountId, accountIdToBlock: AccountId) => {
  return db.account.update({
    where: { accountId: accountId },
    data: {
      blocking: {
        disconnect: { accountId: accountIdToBlock },
      },
    },
  })
}