import { db } from "db"
import type { AccountId } from "~/ids"

export const blockAccount = (accountId: AccountId, accountIdToFollow: AccountId) => {
  return db.account.update({
    where: { accountId: accountId },
    data: {
      blocking: {
        connect: { accountId: accountIdToFollow },
      },
    },
  })
}