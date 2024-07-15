import { PrismaClient } from "@prisma/client/react-native";
import { reactiveHooksExtension } from "@prisma/react-native";

const baseClient = new PrismaClient({
  log: [
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "stdout",
      level: "warn",
    },
    {
      emit: "stdout",
      level: "query",
    },
    {
      emit: "stdout",
      level: "error",
    },
  ],
});

export const extendedClient = baseClient.$extends(reactiveHooksExtension());

export const initDb = async () => {
  try {
    await baseClient.$applyPendingMigrations();
    console.log("🛢️ db init✅");
  } catch (error) {
    console.log("🛢️ db init failed ❌");

    console.error("Error applying pending migrations ❌", error);
    throw new Error("Applying migrations failed.");
  }
};
