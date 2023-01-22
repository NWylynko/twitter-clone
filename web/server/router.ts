import { privateProcedure, router } from "./trpc";
import { z } from "zod"

import { accountsRouter } from "./routes/accounts/router";
import { messagesRouter } from "./routes/messages/router";
import { tweetsRouter } from "./routes/tweets/router";

export const appRouter = router({
  accounts: accountsRouter,
  messages: messagesRouter,
  tweets: tweetsRouter,
  hello: privateProcedure
    .input(z.string())
    .mutation(async ({ input: name, ctx }) => {

      console.time("getUser in route")

      const user = await ctx.getUser();

      console.timeEnd("getUser in route")

      return {
        Hello: name,
        user,
        ctx
      }
    })
});

export type AppRouter = typeof appRouter;
