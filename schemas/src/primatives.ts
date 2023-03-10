import { z } from "zod";

export const timestamp = z.number().positive()
export const id = z.string()
export const eventId = id
export const accountId = id
export const attempt = z.number().positive()