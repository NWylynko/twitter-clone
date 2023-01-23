import { db } from "../../client"
import type { MessageId } from "../../ids"

export const likeMessage = async (messageId: MessageId) => {
  return await db.message.update({
    where: {
      messageId
    },
    data: {
      liked: true
    }
  })
}