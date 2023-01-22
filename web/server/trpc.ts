import { TRPCError, initTRPC } from "@trpc/server";
import { Context } from "./context";
import type { User } from "auth/src/node/decodeJwt"

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create();

const isAuthed = t.middleware(async ({ next, ctx }) => {

  let user: User;

  try {

    user = await ctx.getUser();

  } catch (error: any) {

    console.error(error);

    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: error.message,
    });

  }

  return next({
    ctx: {
      ...ctx,
      // Override the getUser function
      // because we already have the user.
      getUser: async () => user,
    },
  });
});

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuthed);
