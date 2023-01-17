import { z } from "zod";
import { defineEvent } from "./defineEvent";
import { accountId, id } from "./primatives";

const messageId = id

export const sendMessage = defineEvent(
  { action: "send-message", version: 1 },
  {
    recipientId: accountId,
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