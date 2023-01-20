import { db } from "db"
import type { AccountId } from "~/ids"

export const unfollowAccount = (accountId: AccountId, accountIdToUnfollow: AccountId) => {
  return db.account.update({
    where: { accountId },
    data: {
      following: {
        disconnect: { accountId: accountIdToUnfollow },
      },
    },
  })
}