// @ts-ignore
import { Inngest } from "inngest";

// Create Inngest client safely
export const inngest = new Inngest({
  id: process.env.INNGEST_APP_ID || "ndsourced",
  eventKey: process.env.INNGEST_EVENT_KEY || "local",
  ...(process.env.NODE_ENV === "production" && {
    signingKey: process.env.INNGEST_SIGNING_KEY,
  }),
  isDev: process.env.NODE_ENV !== "production",
});
