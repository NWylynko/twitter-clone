import { auth } from "./client"
import type { DecodedIdToken } from "firebase-admin/auth";

export type User = DecodedIdToken;

export const decodeJwt = async (token: string) => {
  const user = await auth.verifyIdToken(token);
  return user;
}