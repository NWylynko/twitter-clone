import { db } from "db"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"
import { HashtagId } from "@/ids"

export const viewHashtag = (hashtagId: HashtagId, pagination: Pagination<Required<Prisma.HashtagWhereUniqueInput>>) => {
  return db.hashtag.findMany({
    where: {
      hashtagId,
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}