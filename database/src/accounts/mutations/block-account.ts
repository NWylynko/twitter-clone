import { db } from "../../client"
import type { AccountId } from "../../ids"

export const blockAccount = (accountId: AccountId, accountIdToBlock: AccountId) => {
  return db.account.update({
    where: { accountId: accountId },
    data: {
      blocking: {
        connect: { accountId: accountIdToBlock },
      },
    },
  })
}