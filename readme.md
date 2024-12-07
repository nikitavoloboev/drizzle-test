## Setup

Need this `.env`:

```
DB_FILE_NAME=file:../db/drizzle.db
```

Then:

```
bun i
```

## Run

```
bun dev
```

To run [scripts/run.ts](scripts/run.ts).

## Make changes to schema

Edit [src/schema.ts](src/schema.ts), then:

```
bunx drizzle-kit generate && bunx drizzle-kit migrate
```
