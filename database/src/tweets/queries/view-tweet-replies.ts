import { db } from "../../client"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"
import type { TweetId } from "../../ids"

export const viewTweetReplies = (tweetId: TweetId, pagination: Pagination<Required<Prisma.TweetWhereUniqueInput>>) => {
  return db.tweet.findMany({
    where: {
      replyTo: {
        tweetId,
      },
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}