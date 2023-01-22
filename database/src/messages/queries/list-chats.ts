import { db } from "../../client"
import type { AccountId, ChatId } from "../../ids"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"

export const listChats = (accountId: AccountId, pagination: Pagination<Required<Prisma.ChatWhereUniqueInput>>) => {
  return db.chat.findMany({
    where: {
      participants: {
        some: {
          accountId,
        },
      }
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}