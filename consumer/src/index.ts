import "source-map-support/register"

import { generateId } from "core/dist/generateId"
import { getKey } from "schemas/dist/getKey"
import { handlers } from "./handlers"

// export const main = async () => {

//   const unparsedEvent = {
//     eventId: generateId(),
//     action: "create-chat",
//     version: 1,
//     timestamp: 21314,
//     accountId: generateId(),
//     attempt: 1,
//     payload: {
//       chatId: generateId(),
//       participants: [generateId(), generateId()],
//     },
//   } as const

//   const key = getKey(unparsedEvent)

//   const x = handlers[key]

//   // const { handler, schema } = handlers[key]
//   const event = await x.schema.parseAsync(unparsedEvent)
//   const output = await x.handler(event)

//   console.log(event)
//   console.log(output)

// }

// main()