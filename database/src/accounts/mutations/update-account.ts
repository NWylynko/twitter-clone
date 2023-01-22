import { db } from "../../client"
import type { AccountId } from "../../ids"

type UpdateAccount = {
  name?: string
  bio?: string
  location?: string
  website?: string
  profileImage?: string
  coverImage?: string
}

export const updateAccount = (accountId: AccountId, update: UpdateAccount) => {
  return db.account.update({
    where: { accountId },
    data: update,
  })
}