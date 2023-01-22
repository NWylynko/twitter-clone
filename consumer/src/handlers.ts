import { accountsHandlers } from "./handlers/accounts";
import { messagesHandlers } from "./handlers/messages";
import { tweetsHandlers } from "./handlers/tweets";

export const handlers = {
  ...accountsHandlers,
  ...messagesHandlers,
  ...tweetsHandlers,
} as const;