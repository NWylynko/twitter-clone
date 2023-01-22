import { SlimEvent } from "./index";


export const getKey = (event: SlimEvent) => `${event["action"]}-${event["version"]}` as const;
export type Key = ReturnType<typeof getKey>;
