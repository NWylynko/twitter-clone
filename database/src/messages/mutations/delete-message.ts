import { db } from "db"
import type { MessageId } from "@/ids"

export const deleteMessage = (messageId: MessageId) => {
  return db.message.delete({
    where: {
      messageId
    },
  })
}