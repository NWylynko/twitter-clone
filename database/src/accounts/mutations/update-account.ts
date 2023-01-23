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

export const updateAccount = async (accountId: AccountId, update: UpdateAccount) => {
  return await db.account.update({
    where: { accountId },
    data: update,
  })
}