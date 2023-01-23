import "source-map-support/register"

import { getKey } from "schemas/dist/getKey"
import { handlers } from "./handlers"

export const main = async () => {

  const unparsedEvent = {
    eventId: "123",
    action: "create-chat",
    version: 1,
    timestamp: 21314,
    accountId: "123",
    attempt: 1,
    payload: {
      chatId: "456",
      participants: ["123", "456"],
    },
  } as const

  const key = getKey(unparsedEvent)

  const x = handlers[key]

  // const { handler, schema } = handlers[key]
  const event = await x.schema.parseAsync(unparsedEvent)
  // const output = await x.handler(event)

  console.log(event)
  // console.log(output)

}

main()