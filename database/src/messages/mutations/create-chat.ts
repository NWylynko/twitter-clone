import { db } from "db"
import type { AccountId, ChatId, MessageId } from "@/ids"

type NewChat = {
  chatId: ChatId
  participants: AccountId[]
}

export const createChat = (newChat: NewChat) => {
  return db.chat.create({
    data: { 
      chatId: newChat.chatId,
      participantIDs: newChat.participants
    },
  })
}