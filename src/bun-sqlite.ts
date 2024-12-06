// as per https://orm.drizzle.team/docs/connect-bun-sqlite
import { drizzle } from "drizzle-orm/bun-sqlite"
import { usersTable } from "./schema"

async function main() {
  const db = drizzle(process.env.DB_FILE_NAME!)

  await db.insert(usersTable).values({
    name: "John",
    age: 30,
    email: "john@example.comm",
  })
  const result = await db.select().from(usersTable)
  console.log(result)
}

main()
