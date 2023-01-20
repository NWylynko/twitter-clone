import { db } from "db"
import type { MessageId } from "@/ids"

export const likeMessage = (messageId: MessageId) => {
  return db.message.update({
    where: {
      messageId
    },
    data: {
      liked: true
    }
  })
}