// as per https://orm.drizzle.team/docs/connect-bun-sqlite
import { drizzle } from "drizzle-orm/bun-sqlite"
import { lastClonesWindow } from "./schema"

async function main() {
  const db = drizzle(process.env.DB_FILE_NAME!)

  await clearLastClonesWindowTable()
  await db.insert(lastClonesWindow).values({
    name: "main.ts -- drizzle",
  })

  // const result = await db.select().from(lastClonesWindow)
  // console.log(result)
}

async function clearLastClonesWindowTable() {
  const db = drizzle(process.env.DB_FILE_NAME!)
  await db.delete(lastClonesWindow)
}

main()
