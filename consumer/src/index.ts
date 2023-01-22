import { getKey } from "schemas/src/getKey"
import { handlers } from "./handlers"

export const main = async () => {

  const unparsedEvent = {
    action: "create-chat",
    version: 1
  } as const

  const key = getKey(unparsedEvent)
  const { handler, schema } = handlers[key]
  const event = await schema.parseAsync(unparsedEvent)
  const output = await handler(event)

}