import { db } from "db"
import type { ChatId } from "@/ids"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"

export const viewDirectMessages = (chatId: ChatId, pagination: Pagination<Required<Prisma.MessageWhereUniqueInput>>) => {
  return db.message.findMany({
    where: {
      chatId,
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}