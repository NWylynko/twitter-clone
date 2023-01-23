import { db } from "../../client"
import type { AccountId } from "../../ids"

export const followAccount = async (accountId: AccountId, accountIdToFollow: AccountId) => {
  return await db.account.update({
    where: { accountId },
    data: {
      following: {
        connect: { accountId: accountIdToFollow },
      },
    },
  })
}