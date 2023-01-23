import { db } from "../../client"
import type { AccountId } from "../../ids"

export const blockAccount = async (accountId: AccountId, accountIdToBlock: AccountId) => {
  return await db.account.update({
    where: { accountId: accountId },
    data: {
      blocking: {
        connect: { accountId: accountIdToBlock },
      },
    },
  })
}