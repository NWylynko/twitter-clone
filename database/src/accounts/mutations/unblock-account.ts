import { db } from "../../client"
import type { AccountId } from "../../ids"

export const unblockAccount = async (accountId: AccountId, accountIdToBlock: AccountId) => {
  return await db.account.update({
    where: { accountId: accountId },
    data: {
      blocking: {
        disconnect: { accountId: accountIdToBlock },
      },
    },
  })
}