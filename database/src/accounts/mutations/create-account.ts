import { db } from "../../client"

type NewAccount = {
  accountId: string
  name: string
  handle: string
}

export const createAccount = (newAccount: NewAccount) => {
  return db.account.create({
    data: newAccount,
  })
}