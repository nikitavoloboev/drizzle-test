import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const lastClonesWindow = sqliteTable("last_clones_active_window", {
  name: text().notNull(), // name of window that was last active
})
