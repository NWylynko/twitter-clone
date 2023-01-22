import { db } from "../../client"
import type { AccountId, ChatId } from "../../ids"

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