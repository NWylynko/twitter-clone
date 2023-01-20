import { db } from "db"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"

export const searchTweets = (searchTerm: string, pagination: Pagination<Required<Prisma.TweetWhereUniqueInput>>) => {
  return db.tweet.findMany({
    where: {
      text: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}