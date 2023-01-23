import { db } from "../../client"

type NewAccount = {
  accountId: string
  name: string
  handle: string
}

export const createAccount = async (newAccount: NewAccount) => {
  return await db.account.create({
    data: newAccount,
  })
}