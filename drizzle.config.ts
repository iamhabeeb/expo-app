import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  dialect: "sqlite",
  driver: "expo",
  // dbCredentials: {
  //   url: process.env.DB_URL,
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  // },
  tablesFilter: ["EXPO__*"],
} satisfies Config;
