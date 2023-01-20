import { db } from "db"
import type { AccountId } from "~/ids"

export const blockAccount = async (blockedBy: AccountId, gettingBlocked: AccountId) => {
  await db.account.update({
    where: { accountId: blockedBy },
    data: {
      blocking: {
        connect: { accountId: gettingBlocked },
      },
    },
  })
}