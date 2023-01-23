import { db } from "../../client"
import type { AccountId, ChatId, MessageId } from "../../ids"

type NewMessage = {
  messageId: MessageId
  text: string
}

export const sendMessage = async (senderId: AccountId, chatId: ChatId, newMessage: NewMessage) => {
  return await db.message.create({
    data: {
      ...newMessage,
      senderId,
      chatId,
      liked: false
    },
  })
}