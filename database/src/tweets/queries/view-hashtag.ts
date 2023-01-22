import { db } from "../../client"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"
import { Hashtag } from "../../ids"

export const viewHashtag = (hashtag: Hashtag, pagination: Pagination<Required<Prisma.HashtagWhereUniqueInput>>) => {
  return db.hashtag.findMany({
    where: {
      name: hashtag,
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}