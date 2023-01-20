import { db } from "db"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"
import type { AccountId } from "@/ids"

export const viewTimeline = (accountId: AccountId, pagination: Pagination<Required<Prisma.TweetWhereUniqueInput>>) => {
  return db.tweet.findMany({
    where: {
      author: {
        followedBy: {
          some: {
            accountId,
          },
        }
      }
    },
    orderBy: {
      createdAt: "desc",
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}