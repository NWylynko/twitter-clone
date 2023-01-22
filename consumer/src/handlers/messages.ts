import { z } from "zod"
import type { Messages } from "schemas/src"
import * as messages from "schemas/src/messages"
import * as db from "database/src/messages/mutations"

const createChat = (event: z.infer<Messages["createChat"]["server"]>) => {
  return db.createChat(event.payload)
}

const sendMessage = (event: z.infer<Messages["sendMessage"]["server"]>) => {
  return db.sendMessage(
    event.accountId,
    event.payload.chatId,
    {
      messageId: event.payload.messageId,
      text: event.payload.text,
    }
  )
}

const likeMessage = (event: z.infer<Messages["likeMessage"]["server"]>) => {
  return db.likeMessage(
    event.payload.messageId
  )
}

const deleteMessage = (event: z.infer<Messages["deleteMessage"]["server"]>) => {
  return db.deleteMessage(
    event.payload.messageId
  )
}

export const messagesHandlers = {
  "create-chat-1": {
    handler: createChat,
    schema: messages.createChat.server,
  },
  "send-message-1": {
    handler: sendMessage,
    schema: messages.sendMessage.server,
  },
  "like-message-1": {
    handler: likeMessage,
    schema: messages.likeMessage.server,
  },
  "delete-message-1": {
    handler: deleteMessage,
    schema: messages.deleteMessage.server,
  },
} as const