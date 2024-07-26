import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
const expo = openDatabaseSync("cresent.db", { enableChangeListener: true });
export const offlineDb = drizzle(expo);
