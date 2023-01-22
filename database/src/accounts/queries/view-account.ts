import { db } from "../../client"
import type { AccountId } from "../../ids"

export const viewAccount = (accountId: AccountId) => {
  return db.account.findUnique({
    where: { accountId },
  })
}