import { z } from "zod";
import { defineEvent } from "./defineEvent";
import { accountId, id } from "./primatives";

const messageId = id
const chatId = id

export const createChat = defineEvent(
  { action: "create-chat", version: 1 },
  {
    participants: z.array(accountId).min(2, { message: "Chat must have at least 2 participants" }),
  },
  {
    chatId,
  }
)

export const sendMessage = defineEvent(
  { action: "send-message", version: 1 },
  {
    chatId,
    text: z.string().max(1000, { message: "Message text must be less than 1000 characters" }),
  },
  {
    messageId,
  }
)

export const deleteMessage = defineEvent(
  { action: "delete-message", version: 1 },
  {
    messageId,
  },
  {}
)

export const likeMessage = defineEvent(
  { action: "like-message", version: 1 },
  {
    messageId,
  },
  {}
)