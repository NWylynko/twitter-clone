import { db } from "db"
import type { AccountId } from "~/ids"

export const viewAccount = (accountId: AccountId) => {
  return db.account.findUnique({
    where: { accountId },
  })
}