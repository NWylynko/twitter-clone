import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

export const createContext = (opts: trpcNext.CreateNextContextOptions) => {
  return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;
