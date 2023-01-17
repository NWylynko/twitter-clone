import { eventId, timestamp, accountId, attempt } from './primatives';
import { z } from "zod";


export const defineEvent = <EventAction extends string, EventVersion extends number, ClientSchema extends z.ZodRawShape, ServerSchema extends z.ZodRawShape>(event: Readonly<{ action: EventAction, version: EventVersion }>, clientSchema: ClientSchema, serverSchema: ServerSchema) => {

  const action = z.literal(event.action)
  const version = z.literal(event.version)

  const client = z.object({
    action,
    version,
    payload: z.object(clientSchema)
  })

  const payload = z.object(clientSchema).merge(z.object(serverSchema))

  const server = z.object({
    eventId,
    action,
    version,
    timestamp,
    accountId,
    attempt,
    payload
  })

  return { client, server, payload } as const
}