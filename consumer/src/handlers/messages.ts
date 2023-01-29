import { z } from "zod"
import type { Messages } from "schemas"
import { messages } from "schemas"
import { mutations } from "database"

const db = mutations.messages

const createChat = async (event: z.infer<Messages["createChat"]["server"]>) => {
  await db.createChat(event.payload)
}

const sendMessage = async (event: z.infer<Messages["sendMessage"]["server"]>) => {
  await db.sendMessage(
    event.accountId,
    event.payload.chatId,
    {
      messageId: event.payload.messageId,
      text: event.payload.text,
    }
  )
}

const likeMessage = async (event: z.infer<Messages["likeMessage"]["server"]>) => {
  await db.likeMessage(
    event.payload.messageId
  )
}

const deleteMessage = async (event: z.infer<Messages["deleteMessage"]["server"]>) => {
  await db.deleteMessage(
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