import { db } from "../../client"
import type { AccountId } from "../../ids"

export const unfollowAccount = async (accountId: AccountId, accountIdToUnfollow: AccountId) => {
  return await db.account.update({
    where: { accountId },
    data: {
      following: {
        disconnect: { accountId: accountIdToUnfollow },
      },
    },
  })
}