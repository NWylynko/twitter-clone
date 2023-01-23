import { db } from "../../client"
import type { MessageId } from "../../ids"

export const deleteMessage = async (messageId: MessageId) => {
  return await db.message.delete({
    where: {
      messageId
    },
  })
}