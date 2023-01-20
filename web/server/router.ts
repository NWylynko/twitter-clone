import { router } from "./trpc";

import { accountsRouter } from "./routes/accounts/router";
import { messagesRouter } from "./routes/messages/router";
import { tweetsRouter } from "./routes/tweets/router";

export const appRouter = router({
  accounts: accountsRouter,
  messages: messagesRouter,
  tweets: tweetsRouter
});

export type AppRouter = typeof appRouter;
