import { db } from "db"
import type { Pagination } from "@/types"
import type { Prisma } from "@prisma/client"

export const searchAccounts = (search: string, pagination: Pagination<Required<Prisma.AccountWhereUniqueInput>>) => {
  return db.account.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          handle: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    cursor: pagination.cursor,
    take: pagination.numItems,
  })
}