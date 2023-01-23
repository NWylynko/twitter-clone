import type { Key } from "schemas/dist/getKey";

import { accountsHandlers } from "./handlers/accounts";
import { messagesHandlers } from "./handlers/messages";
import { tweetsHandlers } from "./handlers/tweets";

export const handlers = {
  ...accountsHandlers,
  ...messagesHandlers,
  ...tweetsHandlers,
} satisfies Record<Key, any>