import { db } from "../../client"
import type { AccountId, ChatId } from "../../ids"

type NewChat = {
  chatId: ChatId
  participants: AccountId[]
}

export const createChat = async (newChat: NewChat) => {
  return await db.chat.create({
    data: {
      chatId: newChat.chatId,
      participantIDs: newChat.participants
    },
  })
}