import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { decodeJwt } from "auth/src/node/decodeJwt"

type Opts = trpcNext.CreateNextContextOptions

const getJwt = (opts: Opts) => () => {
  const authorization = opts.req.headers.authorization;

  if (!authorization) {
    throw new Error("No authorization header");
  }

  const [bearer, token] = authorization.split(" ");


  if (!token) {
    throw new Error("No token");
  }

  return token;
}

const getUser = (opts: Opts) => async () => {
  const token = getJwt(opts)();

  console.log({ token })

  const user = await decodeJwt(token);

  console.log({ cached: false, user })

  return user;
}

export const createContext = (opts: Opts) => {
  return {
    getJwt: getJwt(opts),
    getUser: getUser(opts),
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
